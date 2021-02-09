import fs from 'fs';
import path from 'path';

const loadGQLSchema = moduleId => {
  const filePath = path.join(
    __dirname,
    '../modules',
    moduleId,
    `${moduleId}.graphql`,
  );
  return fs.readFileSync(filePath, 'utf-8');
};

export default loadGQLSchema;
