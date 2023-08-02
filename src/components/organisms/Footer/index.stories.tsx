import { Sprites } from '@/components/ions/Sprites'
import { Footer } from './index'

export default {
  component: Footer,
  title: 'Organisms/Footer',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
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
