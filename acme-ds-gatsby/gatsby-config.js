module.exports = {
  // pathPrefix: '/styleguide', // for deploying to a folder like on Github pages.
  plugins: [
    {
      resolve: 'gatsby-theme-emulsify',
      options: {
        // Site Metadata for style guide
        siteMetadata: {
          title: 'Acme Design System',
          description: 'Acme Design System for Drupal is the first implementation of a new set of standards to manage online design across Acme.',
          author: 'Acme',
        },
        docPagesPath: 'styleguide', // Where your custom style guide pages live
        componentLibPath: 'acme-ds-gatsby/components', // Where your component library lives
        UILibPath: 'http://acmeds.docker.localhost:8000/iframe.html', // Where your Storybook instance lives. Could be remote or local like "/storybook/iframe.html"
        basePath: __dirname + '/../', // Needed to make above paths relative to your project
        designSystems: [
          {
            name: "",
            link: ""
          },
        ]
      },
    },
  ],
};
