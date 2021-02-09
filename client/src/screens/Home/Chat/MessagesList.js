import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const MessageText = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
`;

const MessagesList = ({ messages = [] }) => (
  <Wrapper>
    {messages.map(msg => (
      <MessageText key={msg.id}>
        {msg.from}: {msg.content}
      </MessageText>
    ))}
  </Wrapper>
);

export default MessagesList;
