module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config, { configType }) => {
    config.module.rules.push({
        test: /\semantic.min.css$/i,
      use: [{
        loader: 'css-loader',
        options: {
          modules: {
            compileType: 'modules'
          }
        }
      }]
    });

    return config;
  }
}