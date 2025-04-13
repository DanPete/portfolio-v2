import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'intro',
  title: 'Intro',
  type: 'document',
  icon: UserIcon,
  validation: (Rule) => Rule.required(),
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'value',
          title: 'Value',
          type: 'email',
        }),
      ],
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'value',
          title: 'Value',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'value',
          title: 'Value',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'value',
          title: 'Value',
          type: 'file',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      rows: 50,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
