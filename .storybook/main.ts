import type { StorybookConfig } from '@storybook/nextjs'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: 'storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  implementation: require.resolve('sass'),
                  sassOptions: {
                    includePaths: ['node_modules'],
                  },
                },
              },
            ],
          },
        ],
      },
    },
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        net: false,
        tls: false,
        child_process: false,
      }
    }

    return config
  },
}
export default config
