import { Hallmarks } from './index'

export default {
  component: Hallmarks,
  title: 'Organisms/Hallmarks',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    image:
      'https://d2kjfw7r4xcwtw.cloudfront.net/admin/d5b5b0ce-c39e-5d1b-84c7-ae8283f9bb4b.jpg',
  },
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
    location: {
      table: {
        disable: true,
      },
    },
  },
}
export const Default = {}
