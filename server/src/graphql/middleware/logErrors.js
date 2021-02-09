import { ClientError } from '~/utils/misc';
import log from '~/utils/winston';

const logger = log(__filename);

const logErrors = async (resolve, root, args, context, info) => {
  try {
    return await resolve(root, args, context, info);
  } catch (e) {
    if (e instanceof ClientError) {
      throw e;
    } else {
      logger.error(e);
    }
  }
};

export default logErrors;
