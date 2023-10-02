import { Sprites } from '@/components/ions/Sprites'
import { CardsWrapper } from './index'

export default {
  component: CardsWrapper,
  title: 'Organisms/Wrapper',
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
    showButton: {
      table: {
        disable: true,
      },
    },
    chronicle: {
      table: {
        disable: true,
      },
    },
    category: {
      table: {
        disable: true,
      },
    },
    selectedCategory: {
      table: {
        disable: true,
      },
    },
    setSelectedCategory: {
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
