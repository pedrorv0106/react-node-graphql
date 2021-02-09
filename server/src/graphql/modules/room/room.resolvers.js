import RoomService from '~/services/room.service';
import ChatService from '~/services/chat.service';

const RoomResolver = {
  Query: {
    rooms: (_, __, { services }) => services.room.list(),
    room: (_, { roomId }) => RoomService.get(roomId),
  },
  Mutation: {
    sendMessage: async (_, args, { user, pubsub }) => {
      const msg = await ChatService.sendMessage(args, user);
      pubsub.publish(args.roomId, { messageAdded: msg });

      return msg;
    },
  },
  Subscription: {
    messageAdded: {
      subscribe: (_, { roomId }, { pubsub }) => pubsub.asyncIterator(roomId),
    },
  },
};

export default RoomResolver;
