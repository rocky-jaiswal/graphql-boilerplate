import { useQuery, UseQueryOptions } from 'react-query'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables })
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Post = {
  __typename?: 'Post'
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  postById?: Maybe<Post>
  posts?: Maybe<Array<Post>>
  user?: Maybe<User>
}

export type QueryPostByIdArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type User = {
  __typename?: 'User'
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type GetUserQueryVariables = Exact<{ [key: string]: never }>

export type GetUserQuery = {
  __typename?: 'Query'
  user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
}

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>

export type GetPostsQuery = {
  __typename?: 'Query'
  posts?: Array<{ __typename?: 'Post'; id?: string | null; title?: string | null }> | null
}

export const GetUserDocument = `
    query GetUser {
  user {
    id
    name
  }
}
    `
export const useGetUserQuery = <TData = GetUserQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetUserQueryVariables,
  options?: UseQueryOptions<GetUserQuery, TError, TData>
) =>
  useQuery<GetUserQuery, TError, TData>(
    variables === undefined ? ['GetUser'] : ['GetUser', variables],
    fetcher<GetUserQuery, GetUserQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetUserDocument,
      variables
    ),
    options
  )
export const GetPostsDocument = `
    query GetPosts {
  posts {
    id
    title
  }
}
    `
export const useGetPostsQuery = <TData = GetPostsQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetPostsQueryVariables,
  options?: UseQueryOptions<GetPostsQuery, TError, TData>
) =>
  useQuery<GetPostsQuery, TError, TData>(
    variables === undefined ? ['GetPosts'] : ['GetPosts', variables],
    fetcher<GetPostsQuery, GetPostsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetPostsDocument,
      variables
    ),
    options
  )
