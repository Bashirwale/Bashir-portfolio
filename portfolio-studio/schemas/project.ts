import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'project name',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of technologies used in the project',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The main image representing the project',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'description of the project',
    }),
    defineField({
      name: 'url',
      title: 'url',
      type: 'string',
      description: 'link to the project main page',
    }),
  ],
})
