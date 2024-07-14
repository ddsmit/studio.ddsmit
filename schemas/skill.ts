import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
        name: 'Description',
        title: 'Description',
        type: 'text',
        rows: 6,
        validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'link',
      title: 'Reference URL',
      type: 'url'
    }),
    defineField({
      name: 'relatedskills',
      title: 'Related Skills',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'skill'}]}
      ]
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
      title: 'name',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
