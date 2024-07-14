import {defineField, defineType} from 'sanity'
import company from './company'
import { subtle } from 'crypto'

export default defineType({
  name: 'role',
  title: 'Role',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'companyAt',
      title: 'Company Worked At',
      type: 'reference',
      to: {type: 'company'},
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date'
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 6,
        validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'accomplishments',
      title: 'My Accomplishments',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'accomplishment'}]}
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'companyAt.name',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
