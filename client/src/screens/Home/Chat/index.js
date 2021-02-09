import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import { ON_MESSAGE_ADDED, ROOM_MESSAGES, SEND_MESSAGE } from 'api/room';
import MessagesList from './MessagesList';
import SendMessage from './SendMessage';

const Wrapper = styled.div`
  color: #fff;
`;

const useRoomMessages = roomId => {
  const [submit] = useMutation(SEND_MESSAGE);
  const { data, loading, subscribeToMore } = useQuery(ROOM_MESSAGES, {
    variables: { roomId },
  });

  useEffect(() => {
    subscribeToMore({
      document: ON_MESSAGE_ADDED,
      variables: { roomId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newMessage = subscriptionData.data.messageAdded;

        return Object.assign({}, prev, {
          room: {
            messages: [...prev.room.messages, newMessage],
          },
        });
      },
    });
  }, []);

  const sendMessage = content => {
    return submit({ variables: { roomId, content } });
  };

  return { data, loading, sendMessage };
};

const Chat = ({ roomId }) => {
  const { data, sendMessage } = useRoomMessages(roomId);

  return (
    <Wrapper>
      <h2>Chat</h2>
      <MessagesList messages={data && data.room.messages} />
      <SendMessage onSend={sendMessage} />
    </Wrapper>
  );
};

export default Chat;
