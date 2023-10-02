import { Sprites } from '@/components/ions/Sprites'
import { Header } from './index'

export default {
  component: Header,
  title: 'Molecules/Header',
  tags: ['autodocs'],
  args: {
    spacing: 'withPadding',
  },
  argTypes: {
    spacing: {
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
