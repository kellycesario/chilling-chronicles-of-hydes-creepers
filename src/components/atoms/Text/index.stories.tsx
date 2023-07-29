import { Text } from './index'

export default {
  component: Text,
  title: 'Atoms/Text',
  args: {
    align: 'center',
    color: '',
    children: 'Text example',
  },
  argTypes: {
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
