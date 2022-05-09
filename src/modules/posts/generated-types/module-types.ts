import * as Types from "../../../generated/graphql-server";
import * as gm from "graphql-modules";
export namespace PostsModule {
  interface DefinedFields {
    Query: 'posts' | 'postById';
    Post: 'id' | 'title';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Post = Pick<Types.Post, DefinedFields['Post']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type PostResolvers = Pick<Types.PostResolvers, DefinedFields['Post'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Post?: PostResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      posts?: gm.Middleware[];
      postById?: gm.Middleware[];
    };
    Post?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      title?: gm.Middleware[];
    };
  };
}