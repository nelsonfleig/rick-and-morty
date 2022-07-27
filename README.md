# Haufe Technical Challenge

This fullstack application was created as part of Haufe Group's technical challenge. It uses the
[Rick and Morty API](https://rickandmortyapi.com/) to query characters. Some notable features
include cookie-based authentication with http-only cookies, Redux-Toolkit and RTK Query for state
management, pagination, and the ability to add favorite characters that persist in a Postgres
database using Prisma.

## Techstack

### Server

- Typescript
- Routing-Controllers
- TypeDI
- Prisma

### Web

- Typescript
- React (Vite)
- Styled-Components
- Redux-Toolkit and RTK Query

### Infrastructure

- Postgres
- Husky
- ESlint
- Docker for Development

### APIs

- [Rick and Morty API](https://rickandmortyapi.com/)

## Packages

| Packages          |   Description    |
| :---------------- | :--------------: |
| `packages/server` |  NodeJS Server   |
| `packages/web`    | React Web Client |

## Scripts

| Script              |      Description      |
| :------------------ | :-------------------: |
| `yarn dev:db:start` |    Start Docker DB    |
| `yarn dev:db:stop`  |  Shut down Docker DB  |
| `yarn dev:server`   |     Start server      |
| `yarn dev:web`      |   Start web client    |
| `yarn commit`       |    Run Commitizen     |
| `yarn lint`         | Lint entire workspace |
| `yarn prepare`      |  Install husky hooks  |

## Requirements

- To run this project you need to have `node`, `yarn` and `docker` installed.
- Refer to the `.env.*.example` in the server, web and mobile packages to see what env variables are
  needed to start the application correctly.

## Getting started

To get up and running follow these steps

- Install the dependencies by running `yarn` in the root of the project.
- Start the docker container with `yarn dev:db:start`
- Start the server with `yarn dev:server`
- Start the web client with `yarn dev:web`

## Development Guide

Be careful to be in the right package folder when installing dependencies. Although dependencies in
this monorepo are stored on the top level node_modules, they must be installed in their
corresponding package.json.

## Contributing

This project is using the
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Use
`yarn commit` or `git cz` if you have `commitizen` installed globally to check for linting errors
before commiting and standardizing your commit messages.

## Authors

- Nelson Fleig - [Github](https://github.com/nelsonfleig)
