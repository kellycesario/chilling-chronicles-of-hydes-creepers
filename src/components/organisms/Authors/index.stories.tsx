import { Sprites } from '@/components/ions/Sprites'
import { Authors } from './index'

export default {
  component: Authors,
  title: 'Organisms/Authors',
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
