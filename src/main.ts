import pino from 'pino'

import { createServer } from '@graphql-yoga/node'
import { useGenericAuth } from '@envelop/generic-auth'
import { useDepthLimit } from '@envelop/depth-limit'

import { schema } from './schema'
import resolveUserFn from './plugins/authResolverUserFn'

const logger = pino()

const main = async () => {
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
