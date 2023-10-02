import { PublicationInfo } from './index'

export default {
  component: PublicationInfo,
  title: 'Molecules/Info',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    reviewer: 'Daisy Jones',
    date: 11/11,
  },
  argTypes: {
    reviewer: {
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
