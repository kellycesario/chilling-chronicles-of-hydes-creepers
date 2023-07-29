import { Text } from './index'

export default {
  component: Text,
  title: 'Atoms/Text',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    align: 'center',
    color: 'burgundy',
    children: 'Text example',
  },
  argTypes: {
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
