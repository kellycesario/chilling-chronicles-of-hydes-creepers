import { Sprites } from '@/components/ions/Sprites'
import { CardChronicle } from './index'

export default {
  component: CardChronicle,
  title: 'Molecules/CardChronicle',
  tags: ['autodocs'],
  parameters: {
    layout: '',
  },
  args: {
    reviewer: 'Daisy Jones',
    href: 'www.google.com.br',
    picture:
      'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_42/1792285/pumpkin-shortage-te-main-211022.jpg',
    size: '',
    description: 'This is a very nice subtitle for this article in question',
    lead: 'Article title',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{marginTop: 20}}>
          <Sprites />
          <Story />
        </div>
      )
    },
  ],
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    picture: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    slug: {
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
