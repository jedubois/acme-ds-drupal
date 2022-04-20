# Acme Design System for Drupal
Acme Design System for Drupal is the first implementation of a new set of standards to manage online design across Acme. It provides Design Repository integrating a style guide, component library, and pattern library. Development is currently focused on the migration of Acme's Drupal 7 sites to [Drupal 9](https://www.drupal.org/about/9). Future iterations may support additional platforms.

This project uses [Emulsify](https://www.emulsify.info/): a full prototyping development environment using [Storybook](https://storybook.js.org/) as a component library and [Webpack](https://webpack.js.org/) as a build engine. It is also a Drupal 9 theme.


## Access control
Access to this repository and the artefacts below are managed via Github. Acme staff belong to the Github Acme organisation. Other users, for example agency staff, are granted access on the repository level. Contact the project Maintainer(s) and provide Github username(s) to request access.

## Frontend Development
Components are developed using [Twig](https://twig.symfony.com/) (Symfony’s templating engine) and [Sass](https://sass-lang.com/) (SCSS syntax). Documentation is written as [MDX](https://mdxjs.com/) (format that allows embedding JSX in Markdown).

This respository includes Dockerized local development environment for frontend developers which has been tested with [Docker Desktop](https://www.docker.com/products/docker-desktop) for MacOS 11.6. It is assume Docker Desktop is a similar container tool is already installed on developer systems.

There are 3 containers: acme_ds_traefik provides routing, acme_ds_storybook serves Storybook, acme_ds_gatsby serves Gatsby. Set up the environment as follows:
1. Begin by cloning the project repository, e.g.:
`git clone git@github.com:jedubois/acme-ds-drupal.git`
2. Add `127.0.0.1 acmeds.docker.localhost gatsby.acmeds.docker.localhost` to your /etc/hosts file (some browsers like Chrome may work without it).
3. Install Storybook dependencies:
`make install` (this may take a while!)
4. Bring up the containers:
`make up`
5. Storybook will be available at http://acmeds.docker.localhost:8000/ & Gatsby will be available at http://gatsby.acmeds.docker.localhost:8000/.

Useful commands for working with the containers:
* Get help for commands in the Makefile:
`make help `
* Run arbitrary commands using the Storybook container, e.g.:
`docker-compose run --rm storybook ls`

## Maintainer(s)
* John Doe - john@doe.com
