import { Sprites } from '@/components/ions/Sprites'
import { Contact } from './index'

export default {
  component: Contact,
  title: 'Organisms/Contact',
  tags: ['autodocs'],
  args: {
    image: '/contact-bg.png',
  },
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
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
