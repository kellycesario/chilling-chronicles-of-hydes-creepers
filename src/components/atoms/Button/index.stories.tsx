import { Sprites } from '@/components/ions/Sprites'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'

const button = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    target: {
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
} satisfies Meta<typeof Button>

export default button

type Story = StoryObj<typeof button>

export const Primary: Story = {
  args: {
    label: 'Button',
    isButton: true,
    hasIcon: true,
    level: 'primary',
    icon: 'cross',
  },

  parameters: {
    backgrounds: { default: 'purple' },
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    isButton: true,
    hasIcon: true,
    level: 'secondary',
    icon: 'cross',
  },
  parameters: {
    backgrounds: { default: 'light-gray' },
  },
} as Meta<typeof Button>

export const Tertiary: Story = {
  args: {
    label: 'Button',
    isButton: true,
    hasIcon: true,
    level: 'tertiary',
    icon: 'cross',
  },
  parameters: {
    backgrounds: { default: 'dark-mode' },
  },
} as Meta<typeof Button>

export const Link: Story = {
  args: {
    label: 'Link',
    isButton: false,
    hasIcon: true,
    level: 'primary',
    icon: 'ghost',
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} as Meta<typeof Button>
