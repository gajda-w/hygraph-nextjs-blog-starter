import { type TypedDocumentString } from "@/gql/graphql";

type GraphQLResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };

export const executeGraphql = async <TResult, TVariables>({
  query,
  variables,
  cache,
  next,
  headers,
  graphqlUrl,
}: {
  cache?: RequestCache;
  graphqlUrl?: string;
  headers?: HeadersInit;
  next?: NextFetchRequestConfig;
  query: TypedDocumentString<TResult, TVariables>;
} & (TVariables extends { [key: string]: never }
  ? { variables?: never }
  : { variables: TVariables })): Promise<TResult> => {
  const url = graphqlUrl || process.env.NEXT_PUBLIC_API_URI;

  if (!url) {
    throw TypeError("GraphQL URL is not defined.");
  }

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    cache,
    next,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  });

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(`GraphQL Error`, {
      cause: graphqlResponse.errors,
    });
  }

  return graphqlResponse.data;
};
