import pino, { Logger } from 'pino'
import type { IncomingMessage, ServerResponse } from 'http'

import { createServer } from '@graphql-yoga/node'

import {
  useGenericAuth,
  ResolveUserFn
  // ValidateUserFn
} from '@envelop/generic-auth'
import { useDepthLimit } from '@envelop/depth-limit'

import { schema } from './schema'

export type UserType = {
  id: string
}

export type GraphQLContext = {
  request: IncomingMessage
  res: ServerResponse
  logger: Logger
}

const logger = pino()

// TODO: Extract and validation authorisation header, context type
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
