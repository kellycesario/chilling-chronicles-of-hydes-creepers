import { ArticleHero } from './index'

export default {
  component: ArticleHero,
  title: 'Molecules/ArticleHero',
  tags: ['autodocs'],
  parameters: {
    layout: '',
  },
  args: {
    alt: 'string',
    lead: 'This is a title for an article review',
    picture:
      'https://d2kjfw7r4xcwtw.cloudfront.net/admin/89b6a1cd-a43b-54df-8c6f-da9a517d19d6.jpg',
    description: 'This is a subtitle for an article review',
  },

  argTypes: {
    alt: {
      table: {
        disable: true,
      },
    },
    picture: {
      table: {
        disable: true,
      },
    },
  },
}
export const Default = {}
