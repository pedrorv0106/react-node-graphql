import { verify, sign, decode as decodeToken } from 'jsonwebtoken';
import log from '~/utils/winston';
const logger = log(__filename);

const { APP_SECRET } = process.env;

const getToken = (data, options) => sign(data, APP_SECRET, options);

const issueToken = ({ id, email }) => getToken({ id, email });

const verifyToken = token => {
  try {
    return verify(token, APP_SECRET);
  } catch (e) {
    logger.error(e.message);
    return null;
  }
};

const getUserFromRequest = request => {
  const Authorization = request && request.get('Authorization');

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = verifyToken(token);
    return verifiedToken || null;
  }
};

const getUserFromConnection = connection => {
  const token = connection.context.authToken || '';
  const verifiedToken = verifyToken(token);
  return verifiedToken || null;
};

const getUser = params => {
  if (params.request) {
    return getUserFromRequest(params.request);
  }

  if (params.connection) {
    return getUserFromConnection(params.connection);
  }

  return null;
};

export { getUser, getToken, issueToken, verifyToken, decodeToken, APP_SECRET };
