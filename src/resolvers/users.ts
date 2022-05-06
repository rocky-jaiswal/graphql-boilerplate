import { GraphQLContext } from '../main'
import { User } from '../generated/graphql'

export const user = async (
  _parent: unknown,
  _args: unknown,
  context: GraphQLContext
): Promise<User> => {
  context.logger.info('in users...')
  return { id: 'id1', name: 'max' }
}
