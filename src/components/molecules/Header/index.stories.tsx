import { Sprites } from '@/components/ions/Sprites'
import { Header } from './index'

export default {
  component: Header,
  title: 'Molecules/Header',
  tags: ['autodocs'],
  parameters: {
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
