import { Sprites } from '@/components/ions/Sprites'
import { Share } from './index'

export default {
  component: Share,
  title: 'Molecules/Share',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {
    href: {
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