'use server'

import { getPayloadClient } from '@/lib/payload'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120, 'Name is too long'),
  email: z.string().email('Enter a valid email address'),
  message: z.string().min(1, 'Message is required').max(5000, 'Message is too long'),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    _form?: string[]
  }
  message?: string
  success?: boolean
}

export async function submitContact(
  _prevState: ContactFormState | undefined,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    const flat = parsed.error.flatten().fieldErrors
    const errors: ContactFormState['errors'] = {}
    if (flat.name) errors.name = flat.name
    if (flat.email) errors.email = flat.email
    if (flat.message) errors.message = flat.message
    return { errors, message: 'Please fix the errors above.' }
  }

  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'contact-submissions',
      overrideAccess: false,
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
        submittedAt: new Date().toISOString(),
      },
    })
    return {
      success: true,
      message: 'Thank you — your message has been sent.',
    }
  } catch {
    return {
      errors: { _form: ['Could not send your message. Please try again.'] },
      message: 'Submission failed.',
    }
  }
}
