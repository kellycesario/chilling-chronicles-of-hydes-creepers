import { Sprites } from '@/components/ions/Sprites'
import { AboutUs } from './index'

export default {
  component: AboutUs,
  title: 'Organisms/AboutUs',
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
