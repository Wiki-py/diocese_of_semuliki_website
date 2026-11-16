import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
    description: 'Messages sent through the website contact form.',
  },
  access: {
    create: () => true,
    read: ({ req }) => req.user?.collection === 'admins',
    update: ({ req }) => req.user?.collection === 'admins',
    delete: ({ req }) => req.user?.collection === 'admins',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      minLength: 1,
      maxLength: 120,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      minLength: 1,
      maxLength: 5000,
    },
    {
      name: 'submittedAt',
      type: 'date',
      required: true,
      admin: {
        readOnly: true,
      },
    },
  ],
  timestamps: true,
}
