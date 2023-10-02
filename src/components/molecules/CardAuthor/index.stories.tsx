import { Sprites } from '@/components/ions/Sprites'
import { CardAuthor } from './index'

export default {
  component: CardAuthor,
  title: 'Molecules/CardAuthor',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    alt: 'Sidney Prescott in Scream Saga',
    description: "What's your favorite scary movie?",
    firstHref: 'https://discord.com/',
    secondHref: 'https://www.linkedin.com/feed/',
    firstIcon: 'discord',
    secondIcon: 'linkedin',
    name: 'Sidney',
    picture:
      'https://64.media.tumblr.com/f9eab6ed1197cfbdb4446bedd510e04f/1d16a3bcc9d0d2e3-59/s500x750/1e80f71dea82f7dcd7a82684428b129e27195a62.jpg',
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
    alt: {
      table: {
        disable: true,
      },
    },
    firstHref: {
      table: {
        disable: true,
      },
    },
    secondHref: {
      table: {
        disable: true,
      },
    },
    firstIcon: {
      table: {
        disable: true,
      },
    },
    secondIcon: {
      table: {
        disable: true,
      },
    },
    picture: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
