import { createApplication } from 'graphql-modules'

import { authModule } from './modules/auth/authModule'
import { postModule } from './modules/posts/postModule'

const application = createApplication({
  modules: [authModule, postModule]
})

export const schema = application.createSchemaForApollo()
