import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'url',
      type: 'slug',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Social Logo',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
