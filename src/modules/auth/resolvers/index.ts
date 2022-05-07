import { GraphQLContext } from '../../../main'
import { User } from '../../../generated/graphql'
import { AuthModule } from '../generated-types/module-types'

const resolvers: AuthModule.Resolvers = {
  Query: {
    async user(_root: unknown, _args: unknown, context: GraphQLContext) {
      context.logger.info(context)
      await new Promise((resolve, _reject) => setTimeout(resolve, 2000))
      return {
        id: '101',
        name: 'john'
      }
    }
  },
  User: {
    id(user: User, _args: unknown, _context: GraphQLContext) {
      return user.id || ''
    },
    name(user: User) {
      return user.name || ''
    }
  }
}

export default resolvers
