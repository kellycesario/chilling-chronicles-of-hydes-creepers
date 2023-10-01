import type { Preview } from '@storybook/react'
import '../src/styles/main.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: '',
      values: [
        {
          name: 'dark-mode',
          value: '#000706',
        },
        {
          name: 'light-gray',
          value: '#f5f7fa',
        },
        {
          name: 'purple-mode',
          value: '#765ba8',
        },
        {
          name: 'linear-purple-mode',
          value: 'linear-gradient(180deg, #c4c2ff 0%, #e5e5e5 100%)',
        },
      ],
    },
  },
}

export default preview
