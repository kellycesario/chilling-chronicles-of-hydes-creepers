import { Sprites } from '@/components/ions/Sprites'
import { ContactForm } from './index'

export default {
  component: ContactForm,
  title: 'Organisms/ContactForm',
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
