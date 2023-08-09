import { Sprites } from '@/components/ions/Sprites'
import { CardChronicle } from './index'

export default {
  component: CardChronicle,
  title: 'Molecules/CardChronicle',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    ariaLabel: 'Card',
    author: 'Daisy Jones',
    href: 'www.google.com.br',
    image:
      'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_42/1792285/pumpkin-shortage-te-main-211022.jpg',
    size: '',
    subtitle: 'This is a very nice subtitle for this article in question',
    title: 'Article title',
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
  argTypes: {
    ariaLabel: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    image: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}

export const Large = {
  args: {
    size: 'large',
  },
}
