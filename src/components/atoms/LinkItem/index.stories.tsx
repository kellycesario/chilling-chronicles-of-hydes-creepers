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
  },
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
  },
}
export const Default = {}
