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
    icon: 'books',
  },
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    hasIcon: {
      table: {
        disable: true,
      },
    },
    flexDirection: {
      table: {
        disable: true,
      },
    },
    role: {
      table: {
        disable: true,
      },
    },
    icon: {
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
