let messages = [
  { id: 20, from: 1, content: 'Hello!' },
  { id: 21, from: 2, content: 'Hi! 👋' },
];

const sendMessage = ({ roomId, content }, user) => {
  const lastMessage = messages[messages.length - 1];
  const nextId = lastMessage ? lastMessage.id + 1 : 1;
  const message = {
    id: nextId,
    from: user.id,
    content,
  };

  messages = messages.concat(message);

  return message;
};

const getMessages = roomId => messages;

export default {
  sendMessage,
  getMessages,
};
