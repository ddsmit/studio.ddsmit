import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blockdocument',
  title: 'Block Document',
  type: 'document',
  fields: [
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
  }),
  ],
  preview: {
    select: {
      title: 'longDescription',
    },
    prepare(selection) {
      return {
        title: selection.title[0].children[0].text
    }
    },
  },
})
