import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './index'

const input = {
  title: 'Molecules/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    icon: 'at-sign',
    id: 'email',
    isTextarea: false,
    label: 'Email',
    placeholder: 'bloody.mary@hell.com',
    type: 'email',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['at-sign', 'cross', 'fire', 'plus'],
    },
    id: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    error: {
      table: {
        disable: true,
      },
    },
    validation: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onKeyDown: {
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
} satisfies Meta<typeof Input>

export default input

type Story = StoryObj<typeof input>

export const Default: Story = {
  parameters: {
    backgrounds: { default: 'dark-mode' },
  },
} as Meta<typeof Input>
