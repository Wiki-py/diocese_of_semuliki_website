'use client'

import { useTransition, useState } from 'react'
import { submitContact } from '../actions/submit-contact'

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<{
    errors?: { name?: string[]; email?: string[]; message?: string[]; _form?: string[] }
    message?: string
    success?: boolean
  }>()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget as HTMLFormElement)
    startTransition(() => {
      submitContact(state, formData).then((result) => {
        setState(result)
        if (result.success) {
          ;(event.currentTarget as HTMLFormElement).reset()
        }
      })
    })
  }

  return (
    <form
      className="contact-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          placeholder="Your name"
          required
          aria-invalid={!!state?.errors?.name}
          aria-errormessage={state?.errors?.name ? 'name-error' : undefined}
        />
        {state?.errors?.name && (
          <p id="name-error" className="form-error" role="alert">
            {state.errors.name[0]}
          </p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          aria-invalid={!!state?.errors?.email}
          aria-errormessage={state?.errors?.email ? 'email-error' : undefined}
        />
        {state?.errors?.email && (
          <p id="email-error" className="form-error" role="alert">
            {state.errors.email[0]}
          </p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          required
          aria-invalid={!!state?.errors?.message}
          aria-errormessage={state?.errors?.message ? 'message-error' : undefined}
        />
        {state?.errors?.message && (
          <p id="message-error" className="form-error" role="alert">
            {state.errors.message[0]}
          </p>
        )}
      </div>
      {state?.errors?._form && (
        <p className="form-error form-error--global" role="alert">
          {state.errors._form[0]}
        </p>
      )}
      {state?.success && (
        <p className="form-success" role="status">
          {state.message}
        </p>
      )}
      {!state?.success && state?.message && (
        <p className="form-error form-error--global" role="alert">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="contact-form__button"
      >
        {isPending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
