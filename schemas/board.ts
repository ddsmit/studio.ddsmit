import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'board',
  title: 'Board',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Board Name',
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
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }),
  defineField({
    name: 'description',
    title: 'Board Description',
    type: 'string',
    validation: (Rule) => Rule.required()
  }),

  defineField({
      name: 'stickies',
      title: 'Stickies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type:'stickyNote'},
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
