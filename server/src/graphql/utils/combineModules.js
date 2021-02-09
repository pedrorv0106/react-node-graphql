import merge from 'lodash/merge';

const combineModules = modules => {
  const list = Object.values(modules);

  return {
    typeDefs: list
      .map(m => m.typeDefs)
      .filter(t => t)
      .join(' '),
    resolvers: merge({}, ...list.map(m => m.resolvers).filter(r => r)),
  };
};

export default combineModules;
