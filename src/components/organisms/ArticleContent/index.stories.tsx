import { Sprites } from '@/components/ions/Sprites'
import { ArticleContent } from './index'

export default {
  component: ArticleContent,
  title: 'Organisms/ArticleContent',
  tags: ['autodocs'],
  parameters: {
    layout: '',
  },
  args: {
    reviewer: 'Daisy',
    date: 17 / 11,
    alt: 'string',
    lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    picture:
      'https://d2kjfw7r4xcwtw.cloudfront.net/admin/89b6a1cd-a43b-54df-8c6f-da9a517d19d6.jpg',
    subtitle: 'Headline 2',
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    emphasis: 'even larks and katydids are supposed, by some, to dream',
    quote:
      'No live organism can continue for long to exist sanely under conditions of absolute reality ',
    firstParagraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at.',
    secondParagraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at.',
    thirdParagraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at.',
    fourthParagraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum dictum elit, nec interdum neque ultricies at.',
  },
  argTypes: {
    category: {
      table: {
        disable: true,
      },
    },
    date: {
      table: {
        disable: true,
      },
    },
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
    firstParagraph: {
      table: {
        disable: true,
      },
    },
    secondParagraph: {
      table: {
        disable: true,
      },
    },
    thirdParagraph: {
      table: {
        disable: true,
      },
    },
    fourthParagraph: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <Sprites />
          <Story />
        </div>
      )
    },
  ],
}
export const Default = {}
