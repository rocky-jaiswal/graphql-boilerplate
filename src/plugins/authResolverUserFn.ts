import {
  ResolveUserFn
  // ValidateUserFn
} from '@envelop/generic-auth'

import { UserType } from '../types'

// TODO: Extract and validation authorisation header, context type
const resolveUserFn: ResolveUserFn<UserType> = async (_context) => {
  return { id: '101' }
}

export default resolveUserFn
