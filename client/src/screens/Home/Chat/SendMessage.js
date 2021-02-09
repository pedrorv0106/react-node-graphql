import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: #fff;
  background-color: #101216;
  border: none;
  padding: 15px;
  width: 100%;
  outline: none;
`;

const SendMessage = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleChange = ({ target }) => setMessage(target.value);

  const handleKeyDown = async ({ key }) => {
    if (key !== 'Enter') {
      return;
    }

    try {
      await onSend(message);
      setMessage('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Input
      value={message}
      placeholder="Say something..."
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SendMessage;
