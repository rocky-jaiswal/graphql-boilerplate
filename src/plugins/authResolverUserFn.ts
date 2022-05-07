import {
  ResolveUserFn
  // ValidateUserFn
} from '@envelop/generic-auth'

export type UserType = {
  id: string
}

// TODO: Extract and validation authorisation header, context type
const resolveUserFn: ResolveUserFn<UserType> = async (_context) => {
  return { id: '101' }
}

export default resolveUserFn
