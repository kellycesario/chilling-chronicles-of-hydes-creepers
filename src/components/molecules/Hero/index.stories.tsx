import { Sprites } from '@/components/ions/Sprites'
import { Hero } from './index'

export default {
  component: Hero,
  title: 'Molecules/Hero',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    image: 'https://i.ibb.co/2nZMYy9/hero-homescreen.png',
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
