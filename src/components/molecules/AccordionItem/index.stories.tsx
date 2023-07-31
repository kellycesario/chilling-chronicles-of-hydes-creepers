import { Sprites } from '@/components/ions/Sprites'
import { AccordionItem } from './index'

export default {
  component: AccordionItem,
  title: 'Molecules/AccordionItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    question: 'ISBN',
    answer:
      'R341-IIT1',
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
