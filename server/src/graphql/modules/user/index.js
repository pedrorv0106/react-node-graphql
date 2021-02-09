import gqlLoader from '~/graphql/utils/gqlLoader';
import resolvers from './user.resolvers';

export default {
  typeDefs: gqlLoader('user'),
  resolvers,
};
