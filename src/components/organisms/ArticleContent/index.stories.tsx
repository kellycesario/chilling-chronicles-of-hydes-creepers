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
    reviewer: 'Kelly',
    date: '13 de Dezembro',
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
