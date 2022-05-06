import { readFileSync } from 'fs'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { Resolvers } from './generated/graphql'
import { user } from './resolvers/users'

const typeDefs = readFileSync('./src/graphql/sample.graphql', 'utf8')

const resolvers: Resolvers = {
  Query: {
    user
  }
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefs]
})
