import { PubSub } from 'graphql-yoga';
import { getUser } from '~/utils/auth';
import * as services from '~/services';
import * as modules from './modules';
import * as scalars from './scalars';
import logErrors from './middleware/logErrors';
import permissions from './middleware/permissions';
import combineModules from './utils/combineModules';

const gqlModules = {
  ...scalars,
  ...modules,
};

const pubsub = new PubSub();
const { typeDefs, resolvers } = combineModules(gqlModules);

const context = (params = {}) => ({
  user: getUser(params),
  services,
  pubsub,
});

export default {
  typeDefs,
  resolvers,
  middlewares: [permissions, logErrors],
  context,
};
