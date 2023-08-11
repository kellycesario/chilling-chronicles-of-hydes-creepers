import { Sprites } from '@/components/ions/Sprites'
import { Icon } from './index'

export default {
  component: Icon,
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    icon: 'ghost',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [
        'quote',
        'quote-02',
        'home',
        'menu',
        'close',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'left',
        'right',
        'search',
        'instagram',
        'twitter',
        'discord',
        'linkedin',
        'at-sign',
        'fire',
        'plus',
        'minus',
        'alien',
        'skull',
        'ghost',
        'cross',
        'books',
      ],
    },
    fill: {
      table: {
        disable: true,
      },
    },
    className: {
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
