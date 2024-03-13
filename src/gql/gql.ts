/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment Post on Post {\n  id\n  title\n  date\n  excerpt\n  slug\n  content {\n    text\n  }\n  coverImage {\n    url\n  }\n  author {\n    name\n  }\n}": types.PostFragmentDoc,
    "query PostBySlug($slug: String!) {\n  post(where: {slug: $slug}) {\n    ...Post\n  }\n}": types.PostBySlugDocument,
    "query PostsGetList {\n  posts {\n    ...Post\n  }\n}": types.PostsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Post on Post {\n  id\n  title\n  date\n  excerpt\n  slug\n  content {\n    text\n  }\n  coverImage {\n    url\n  }\n  author {\n    name\n  }\n}"): typeof import('./graphql').PostFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PostBySlug($slug: String!) {\n  post(where: {slug: $slug}) {\n    ...Post\n  }\n}"): typeof import('./graphql').PostBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PostsGetList {\n  posts {\n    ...Post\n  }\n}"): typeof import('./graphql').PostsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
