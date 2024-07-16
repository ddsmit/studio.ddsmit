import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'journalEntry',
  title: 'Journal Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Entry name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),

  defineField({
    name: 'entry',
    title: 'What To Share',
    type: 'blockContent',
    rows: 30
  }),
  defineField({
    name: 'tags',
    title: 'Tags',
    type: 'array',
    of: [
      {type: 'reference', to: [{type: 'tag'}]}
    ]
  })
  ],
  preview: {
    select: {
      entryDate: 'created',
      title: 'name'
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
