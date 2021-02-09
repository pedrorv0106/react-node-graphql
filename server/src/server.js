import './utils/env';
import { GraphQLServer } from 'graphql-yoga';
import graphqlOptions from './graphql/index';
import log from '~/utils/winston';
import db from '~/db/models';

const logger = log(__filename);
const { PORT = 4000 } = process.env;
const server = new GraphQLServer({
  ...graphqlOptions,
});

db.sequelize.sync();

server
  .start({
    port: PORT,
    endpoint: '/api',
    playground: '/graphql',
    subscriptions: '/sub',
    cors: true,
  })
  .then(() => logger.info(`Server is running on http://localhost:${PORT}`))
  .catch(e => logger.error(e));
