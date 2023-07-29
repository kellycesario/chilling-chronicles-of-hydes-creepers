import { Headings } from './index'

export default {
  component: Headings,
  title: 'Atoms/Headings',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    level: '1',
    align: 'center',
    color: 'burgundy',
    children: 'Title example',
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4', '5', '6'],
    },
    align: {
      control: { type: 'select' },
      options: ['right', 'center', 'left'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'black',
        'white',
        'gray',
        'light-gray',
        'burgundy',
        'purple',
        'light-purple',
      ],
    },
  },
}

export const Default = {}
