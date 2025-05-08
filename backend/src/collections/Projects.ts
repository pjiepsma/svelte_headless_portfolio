import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Assumes your images are stored in the 'media' collection
      required: true,
    },
    {
      name: 'dateAccomplished',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
        },
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        elements: ['h1', 'h2', 'h3', 'blockquote', 'ul', 'ol', 'link', 'relationship'],
        leaves: ['bold', 'italic', 'underline'],
        uploads: {
          collections: {
            media: {
              fields: [],
            },
          },
        },
      },
    },
    {
      name: 'stack',
      type: 'array',
      fields: [
        {
          name: 'tech',
          type: 'text',
        },
      ],
    },
  ],
}
