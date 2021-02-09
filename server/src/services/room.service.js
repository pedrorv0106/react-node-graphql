import ChatService from './chat.service';

const list = () => {};
const get = id => {
  return {
    id,
    messages: ChatService.getMessages(id),
  };
};

export default {
  list,
  get,
};
