# GraphQL Boilerplate

## Working GraphQL setup with -

- TypeScript
- Yoga
- CodeGen
- GraphQL Modules
- Yoga Playground
- Envelop
- Security (https://www.envelop.dev/plugins/use-generic-auth)
- Scalars
- Logging

Can use dotenv for config

Ideal for building any GraphQL service which is type safe, secure and scalable.

## To use -

1. Create new module in src
2. Create schema file for module
3. `yarn codegen:server` to create types for the schema (server side)
4. `yarn codegen:client` to create types for the schema (client side). This will create typed react-query queries that you can import on the client.
5. Create resolver functions (as in sample modules)
