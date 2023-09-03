import { PublicationInfo } from './index'

export default {
  component: PublicationInfo,
  title: 'Molecules/Info',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'Daisy Jones',
    date: 'December 13th',
  },
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    date: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
