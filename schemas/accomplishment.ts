import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'accomplishment',
  title: 'Accomplishment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Accomplishment Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'problem',
      title: 'Problem Definition',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required()
  }),
  defineField({
    name: 'action',
    title: 'What I Did',
    type: 'blockContent',
    rows: 10
  }),
    defineField({
      name: 'result',
      title: 'Result',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required()
  }),
    defineField({
      name: 'skillsUsed',
      title: 'Skills Used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type:'skill'},
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
