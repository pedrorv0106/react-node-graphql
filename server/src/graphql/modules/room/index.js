import gqlLoader from '~/graphql/utils/gqlLoader';
import resolvers from './room.resolvers';

export default {
  typeDefs: gqlLoader('room'),
  resolvers,
};
