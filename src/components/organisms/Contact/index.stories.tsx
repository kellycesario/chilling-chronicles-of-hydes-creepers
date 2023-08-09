import { Sprites } from '@/components/ions/Sprites'
import { Contact } from './index'

export default {
  component: Contact,
  title: 'Organisms/Contact',
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
