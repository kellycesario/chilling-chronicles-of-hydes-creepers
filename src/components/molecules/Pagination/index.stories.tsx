import { Sprites } from '@/components/ions/Sprites'
import { Pagination } from './index'

export default {
  component: Pagination,
  title: 'Molecules/Pagination',
  tags: ['autodocs'],
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
  args: {
    currentPage: '1',
  },
  argTypes: {
    totalPages: {
      table: {
        disable: true,
      },
    },
    currentPage: {
      table: {
        disable: true,
      },
    },
    onPageChange: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
