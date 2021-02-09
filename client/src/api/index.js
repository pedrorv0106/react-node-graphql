import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import * as auth from 'utils/auth';

const secure = window.location.protocol.includes('https');
const host =
  process.env.NODE_ENV === 'production'
    ? window.location.host
    : 'localhost:4000';

const httpUri = `${secure ? 'https' : 'http'}://${host}/api`;
const wsUri = `${secure ? 'wss' : 'ws'}://${host}/sub`;

// Link for general http requests
const rawHttpLink = new HttpLink({
  uri: httpUri,
});

// Adds token to a request
const authLink = setContext((_, { headers }) => {
  const token = auth.getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = authLink.concat(rawHttpLink);

// Link for subscriptions
const wsLink = new WebSocketLink({
  uri: wsUri,
  options: {
    reconnect: true,
    connectionParams: () => ({
      authToken: auth.getToken(),
    }),
  },
});

// Decides which should link to be used to process a request
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

// Logs any network or graphql related errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: errorLink.concat(splitLink),
  cache: new InMemoryCache(),
});

export default client;
