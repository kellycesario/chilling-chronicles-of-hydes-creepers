import { Sprites } from '@/components/ions/Sprites'
import { MainHeader } from './index'

export default {
  component: MainHeader,
  title: 'Organisms/MainHeader',
  tags: ['autodocs'],
  args: {
    image: 'https://i.ibb.co/2nZMYy9/hero-homescreen.png',
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
