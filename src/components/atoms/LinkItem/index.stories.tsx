import { Sprites } from '@/components/ions/Sprites'
import { LinkItem } from './index'

export default {
  component: LinkItem,
  title: 'Atoms/LinkItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'This is a link',
    href: '/',
    hasIcon: false,
    icon: 'books',
  },
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    icon: {
      control: { type: 'select' },
      options: ['linkedin', 'twitter', 'discord'],
    }
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
