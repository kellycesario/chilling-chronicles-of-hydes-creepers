import { Headings } from './index'

export default {
  component: Headings,
  title: 'Atoms/Headings',
  args: {
    level: '1',
    align: 'center',
    color: '',
    children: 'Title example',
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4', '5', '6'],
    },
    align: {
      control: { type: 'inline-radio' },
      options: ['right', 'center', 'left'],
    },
    color: {
      control: { type: 'inline-radio' },
      options: [],
    },
  },
}
export const Default = {}
