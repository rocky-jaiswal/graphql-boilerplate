export const posts = async (parent: unknown, args: {}, context: any) => {
  context.logger.info('in posts...')
  return [{ id: 1, title: 'hello' }]
}
