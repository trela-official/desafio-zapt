module.exports = {
  stories: ['../src/components/**/stories.@(js|md|ts)x'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-dark-mode/register',
    'storybook-mobile',
    '@storybook/addon-a11y'
  ],
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  previewHead: head => `
    ${head}
    <style>
      #root {
        display: grid !important;
        place-items: center !important;
        height: 100% !important;
        width: 100% !important;
      }
      
      @media screen and (min-width: 90rem) {
        #root {
          padding: 3rem!important;   
        }
      }
      
      .sbdocs-p {
        font-size: 17px !important;
      }
    </style>
  `,
  reactOptions: { fastRefresh: true }
}
