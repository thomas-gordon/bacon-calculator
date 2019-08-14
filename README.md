# Bacon Calculator

Get your pig, get it cured!

## Setup

This is a (gatsby)[https://www.gatsbyjs.org/docs/] build setup inside (Docker)[https://docs.docker.com/compose/compose-file/] for portability. It's my testing ground for Gatsby features and future proofed CSS-in-JS methodologies.

1. `docker-compose build`

## Run

By default the Docker container runs `gatsby develop`, which should be fine for all development
purposes. Otherwise, generate a build (next readme section) and run with that.

1. `docker-compose up`
2. `http://localhost`

## Generate Static Build

1. `docker-compose run --rm frontend npm run build`
2. Static site will now be available inside `public`