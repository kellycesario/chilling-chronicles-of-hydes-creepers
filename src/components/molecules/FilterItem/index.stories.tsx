import { Sprites } from '@/components/ions/Sprites'
import { FilterItem } from './index'

export default {
  component: FilterItem,
  title: 'Molecules/FilterItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    icon: 'ghost',
    label: 'Ghosts',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['fire', 'alien', 'skull', 'cross', 'books', 'ghost'],
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
