import { Sprites } from '@/components/ions/Sprites'
import { SearchInput } from './index'

export default {
  component: SearchInput,
  title: 'Molecules/Search Input',
  tags: ['autodocs'],
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
