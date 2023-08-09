import { Sprites } from '@/components/ions/Sprites'
import { Search } from './index'

export default {
  component: Search,
  title: 'Molecules/Search',
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
