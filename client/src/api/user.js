import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation Login {
    login {
      token
      account {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

const ME = gql`
  query Me {
    me {
      id
      email
      firstName
      lastName
    }
  }
`;

export { LOGIN, ME };
