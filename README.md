# Node-React-Sequelize-GraphQL

React, Node, Sequelize, GraphQL

# Development

## Setup client

```bash
$ cd ./client
$ yarn
$ yarn dev
```

More details about `client` is [here](./client/README.md)

## Setup server

```bash
$ cd ./server
$ yarn
$ cp .env.example .env

# After editing the `.env` file we need to setup DB
$ yarn db:create
$ yarn dev

```

More details about `server` is [here](./server/README.md)

## GraphQL playground

http://localhost:4000/graphql
