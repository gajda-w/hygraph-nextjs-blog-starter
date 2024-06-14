import { PostsClient } from "./PostClient";
import { PostsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export default async function Posts() {
  const { posts } = await executeGraphql({
    query: PostsGetListDocument,
  });

  return <PostsClient posts={posts} />;
}
