import { Sprites } from '@/components/ions/Sprites'
import { Filter } from './index'

export default {
  component: Filter,
  title: 'Organisms/Filter',
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
