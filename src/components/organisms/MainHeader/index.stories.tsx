import { Sprites } from '@/components/ions/Sprites'
import { MainHeader } from './index'

export default {
  component: MainHeader,
  title: 'Organisms/MainHeader',
  tags: ['autodocs'],
  args: {
    image: '/hero-blog.png',
  },
  parameters: {
    layout: 'fullscreen',
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
