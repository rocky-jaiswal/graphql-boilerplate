import { GraphQLContext } from '../main'

export const posts = async (
  _parent: unknown,
  _args: unknown,
  context: GraphQLContext
) => {
  context.logger.info('in posts...')
  return [{ id: 1, title: 'hello' }]
}
