import { Sprites } from '@/components/ions/Sprites'
import { ArticleQuote } from './index'

export default {
  component: ArticleQuote,
  title: 'Molecules/ArticleQuote',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    emphasis: 'even larks and katydids are supposed, by some, to dream',
    quote:
      'No live organism can continue for long to exist sanely under conditions of absolute reality; ',
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
  argTypes: {
    emphasis: {
      table: {
        disable: true,
      },
    },
    quote: {
      table: {
        disable: true,
      },
    },
  },
}
export const Default = {}
