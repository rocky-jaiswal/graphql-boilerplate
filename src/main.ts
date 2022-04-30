import { createServer } from '@graphql-yoga/node'
import {
  useGenericAuth,
  ResolveUserFn
  // ValidateUserFn
} from '@envelop/generic-auth'

import { schema } from './schema'

type UserType = {
  id: string
}

const resolveUserFn: ResolveUserFn<UserType> = async (_context) => {
  return { id: '101' }
}

async function main() {
  const server = createServer({
    schema,
    plugins: [
      useGenericAuth({
        resolveUserFn,
        mode: 'protect-all'
      })
    ]
  })
  await server.start()
}

main()
