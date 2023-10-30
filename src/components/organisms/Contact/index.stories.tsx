import { Sprites } from '@/components/ions/Sprites'
import { Contact } from './index'

export default {
  component: Contact,
  title: 'Organisms/Contact',
  tags: ['autodocs'],
  args: {
    image: 'https://amyscrypt.com/wp-content/uploads/2019/06/RockingChairFree.jpg',
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
