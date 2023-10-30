import { Sprites } from '@/components/ions/Sprites'
import { BannerQuote } from './index'

export default {
  component: BannerQuote,
  title: 'Organisms/BannerQuote',
  tags: ['autodocs'],
  args: {
    image: 'https://wallpapers.com/images/hd/white-christmas-in-winter-82n7x2vx82r8cj9n.jpg',
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
