import { SliderComponent } from './index'

export default {
  component: SliderComponent,
  title: 'Molecules/Slider',
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark-mode' },
  },
  args: {},
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
  },
}
export const Default = {}