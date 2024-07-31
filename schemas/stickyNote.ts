import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stickyNote',
  title: 'Sticky Note',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sticky Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        slugify: input => input
          .toLowerCase()
          .trimEnd()
          .trimStart()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }),
    defineField({
      name: 'Link',
      title: 'Link',
      type: 'url',
    }),
  defineField({
    name: 'information',
    title: 'Information',
    type: 'blockContent',
    rows: 10
  }),

  defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type:'tag'},
          ]
        },
    ]
    }),
  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
