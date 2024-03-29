import { Sprites } from '@/components/ions/Sprites'
import { AboutItem } from './index'

export default {
  component: AboutItem,
  title: 'Molecules/AboutItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    icon: 'skull',
    topic: 'Twenty Tales of Terror',
    subtopic:
      "Feast your eyes on the exclusive reviews of the infamous Edgar J Hyde 'Creepers'",
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
