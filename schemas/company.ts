import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'link',
      title: 'Reference URL',
      type: 'url'
    })
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
