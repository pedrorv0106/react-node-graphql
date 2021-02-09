## Directories

`config` - configuration files  
`db` - DB-related files (models, migrations, seeds)  
`services` - business logic and integrations  
`utils` - general utilities  
`graphql` - GraphQL API files and modules

### GraphQL directories and files

`middleware` - middleware (almost like in Express) that run along every request
`middleware/permissions.js` - place where we can configure who can do what
`modules` - place for our API schemas and resolvers
`scalars` - custom GraphQL types
`utils` - graphql-related utils
