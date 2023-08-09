import { Sprites } from '@/components/ions/Sprites'
import { Select } from './index'

export default {
  component: Select,
  title: 'Molecules/Select',
  tags: ['autodocs'],

  args: {
    label: 'What do you dare to search?',
    image: '/arrow.svg',
  },
  argTypes: {
    options: {
      control: 'object',
      table: {
        disable: true,
      },
    },
    image: {
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

const Template = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  options: [
    { label: 'All', value: 'All chronicles' },
    { label: 'Unworldly', value: 'Unworldly chronicles' },
    { label: 'Death', value: 'Death chronicles' },
    { label: 'Teligious topics', value: 'Teligious topics chronicles' },
    { label: 'Witchcraft', value: 'Witchcraft chronicles' },
    { label: 'Ghost', value: 'Ghost chronicles' },
  ],
}
