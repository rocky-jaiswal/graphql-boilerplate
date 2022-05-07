import { GraphQLContext } from '../../../types'
import { Post, QueryPostByIdArgs } from '../../../generated/graphql'
import { PostsModule } from '../generated-types/module-types'

const resolvers: PostsModule.Resolvers = {
  Query: {
    async posts(_root: unknown, _args: unknown, context: GraphQLContext) {
      context.logger.info(context.currentUser)
      await new Promise((resolve, _reject) => setTimeout(resolve, 1000))
      return [
        {
          id: '101',
          title: 'post101'
        }
      ]
    },
    async postById(_root: unknown, args: QueryPostByIdArgs, _context: GraphQLContext) {
      await new Promise((resolve, _reject) => setTimeout(resolve, 1000))
      return {
        id: args.id || '',
        title: 'post101'
      }
    }
  },
  Post: {
    id(post: Post, _args: unknown, _context: GraphQLContext) {
      return post.id || ''
    },
    title(user: Post) {
      return user.title || ''
    }
  }
}

export default resolvers
