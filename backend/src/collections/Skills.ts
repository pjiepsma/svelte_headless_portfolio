import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'skillsList',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'iconClass',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
