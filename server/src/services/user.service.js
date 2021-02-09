import crypto from 'crypto';

import { issueToken } from '~/utils/auth';
import log from '~/utils/winston';
import db from '~/db/models';

const User = db.user;
const logger = log(__filename);

const login = async input => {
  const { spotifyId } = input;
  try {
    let result = await User.findAll({ where: { spotifyId: spotifyId } });

    if (result.length === 0) {
      let user = {
        spotifyId: input.spotifyId,
        nickname: input.nickname,
        name: input.name,
        email: input.email,
        avatar: input.avatar,
        points: 0,
        userId: '',
        password: '',
      };
      result = await User.create(user);
      user.id = result.id;
      const token = issueToken(user);
      return {
        user,
        token,
      };
    } else {
      const token = issueToken(result[0]);
      return {
        user: result[0],
        token,
      };
    }
  } catch (err) {
    logger.error(err.message);
    return {
      user: {},
      token: null,
    };
  }
};

const updateUser = async input => {
  const { spotifyId, avatar } = input;
  try {
    await User.update(
      { avatar: avatar },
      {
        where: { spotifyId: spotifyId },
      },
    );
    return true;
  } catch (err) {
    logger.error(err.message);
    return false;
  }
};

const get = async id => {
  try {
    let result = await User.find(id);
    return result.toJSON();
  } catch (err) {
    logger.error(err.message);
    return null;
  }
};

const adminLogin = async input => {
  const { userId, password } = input;
  try {
    let result = await User.findAll({ where: { userId: userId } });

    if (result.length === 0) {
      logger.error('User does not exist!');
      return {
        success: false,
        token: null,
        message: 'User does not exist!',
      };
    } else {
      let hash = crypto.createHash('md5').update(password).digest('hex');
      if (hash !== result[0].password) {
        logger.error('Password not correct!');
        return {
          success: false,
          token: null,
          message: 'Password not correct!',
        };
      } else {
        const token = issueToken(result[0]);
        return {
          success: true,
          user: result[0],
          token,
        };
      }
    }
  } catch (err) {
    logger.error(err.message);
    return {
      success: false,
      token: null,
    };
  }
};

const adminUpdate = async input => {
  const { name, spotifyId, userId } = input;
  const data = { name, spotifyId };
  try {
    await User.update(data, {
      where: { userId: userId },
    });

    return true;
  } catch (err) {
    logger.error(err.message);
    return false;
  }
};

export default {
  login,
  adminLogin,
  updateUser,
  adminUpdate,
  get,
};
