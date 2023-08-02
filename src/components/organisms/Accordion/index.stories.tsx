import { Sprites } from '@/components/ions/Sprites'
import { Accordion } from './index'

export default {
  component: Accordion,
  title: 'Organisms/Accordion',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
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
