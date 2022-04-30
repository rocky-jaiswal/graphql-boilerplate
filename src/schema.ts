import { readFileSync } from 'fs'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { Resolvers } from './generated/graphql'
import { posts } from './resolvers/posts'

const typeDefs = readFileSync('./src/graphql/sample.graphql', 'utf8')

const resolvers: Resolvers = {
  Query: {
    posts
  }
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefs]
})
