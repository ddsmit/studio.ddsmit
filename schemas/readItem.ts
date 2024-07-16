import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'readItem',
  title: 'Item To Read',
  type: 'document',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required()
    }),

  defineField({
    name: 'status',
    title: 'Status',
    type: 'string',
    initialValue: 'needToRead',
    options: {
      list: [{title:'Read', value: 'read'},{title: 'Need to Read', value: 'needToRead'}],
      layout: "radio",
      
    },
  }),
  defineField({
    name: 'recomend',
    title: "Would Recommend?",
    type: 'boolean',
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
      title: 'link'
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
