module.exports = {
  siteMetadata: {
    title: 'Szymon',
    subtitle: 'Szymon | Portfolio',
    description:
      'I am Full Stack Developer at Brainhub. I have Master\'s Degree in Electronics and Telecommunications and experience with Javascript and Python programming languages, React, Node.js, Django, Angular 6 technologies and frameworks.',
    author: 'Szymon Ludyga',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
        ignore: ['**/.*'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: 'src',
        aliases: {
          components: './components',
          utils: './utils',
          context: './context',
          templates: './templates',
          images: './images',
          static: {
            root: './public',
            alias: './static',
          },
        },
      },
    },
  ],
};
