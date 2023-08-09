import { Sprites } from '@/components/ions/Sprites'
import { BannerQuote } from './index'

export default {
  component: BannerQuote,
  title: 'Organisms/BannerQuote',
  tags: ['autodocs'],
  args: {
    image: '/bg.png',
  },
  argTypes: {
    image: {
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
