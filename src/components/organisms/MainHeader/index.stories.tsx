import { Sprites } from '@/components/ions/Sprites'
import { MainHeader } from './index'

export default {
  component: MainHeader,
  title: 'Organisms/MainHeader',
  tags: ['autodocs'],
  args: {
    image:
      'https://www.freepnglogos.com/uploads/pumpkin-png/vector-graphic-pumpkin-cartoon-orange-stem-39.png',
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
