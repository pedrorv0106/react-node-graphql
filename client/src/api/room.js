import { gql } from '@apollo/client';

const ROOM_MESSAGES = gql`
  query RoomMessages($roomId: ID!) {
    room(roomId: $roomId) {
      messages {
        id
        from
        content
      }
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation SendMessage($roomId: ID!, $content: String!) {
    sendMessage(roomId: $roomId, content: $content) {
      id
      from
      content
    }
  }
`;

const ON_MESSAGE_ADDED = gql`
  subscription OnMessageAdded($roomId: ID!) {
    messageAdded(roomId: $roomId) {
      id
      from
      content
    }
  }
`;

export { ROOM_MESSAGES, SEND_MESSAGE, ON_MESSAGE_ADDED };
