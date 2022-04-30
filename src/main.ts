import pino from 'pino'
import { createServer } from '@graphql-yoga/node'
import {
  useGenericAuth,
  ResolveUserFn
  // ValidateUserFn
} from '@envelop/generic-auth'
import { useDepthLimit } from '@envelop/depth-limit'

import { schema } from './schema'

type UserType = {
  id: string
}

const logger = pino()

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
      }),
      useDepthLimit({
        maxDepth: 5
      })
    ],
    context: () => {
      return { logger }
    }
  })
  await server.start()
}

main()
