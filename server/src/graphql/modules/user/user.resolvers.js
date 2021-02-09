import UserService from '~/services/user.service';

const UserResolvers = {
  Query: {
    me: (_, __, { user }) => UserService.get(user.id),
  },
  Mutation: {
    login: (_, args) => UserService.login(args),
    updateUser: (_, args) => UserService.updateUser(args),
    adminLogin: (_, args) => UserService.adminLogin(args),
    adminUpdate: (_, args) => UserService.adminUpdate(args),
  },
};

export default UserResolvers;
