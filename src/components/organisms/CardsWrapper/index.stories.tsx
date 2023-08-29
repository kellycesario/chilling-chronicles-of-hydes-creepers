import { Sprites } from '@/components/ions/Sprites'
import { CardsWrapper } from './index'

export default {
  component: CardsWrapper,
  title: 'Organisms/Cards',
  tags: ['autodocs'],
  argTypes: {
    numCardsMobile: {
      table: {
        disable: true,
      },
    },
    numCardsTablet: {
      table: {
        disable: true,
      },
    },
    numCardsDesktop: {
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
