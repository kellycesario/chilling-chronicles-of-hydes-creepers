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
    image: 'https://www.freepnglogos.com/uploads/pumpkin-png/vector-graphic-pumpkin-cartoon-orange-stem-39.png',
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
