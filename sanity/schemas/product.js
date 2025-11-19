export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Gallery (Images & Videos)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'file',
          options: {
            accept: 'video/*'
          }
        }
      ]
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Show this product on the homepage',
      initialValue: false
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      description: 'Is this product available for order?',
      initialValue: true
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'price',
    },
    prepare(selection) {
      const {title, media, subtitle} = selection
      return {
        title: title,
        media: media,
        subtitle: `$${subtitle}`
      }
    }
  }
}
