import { PostsClient } from "./posts/PostClient";
import { PostsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export default async function Home() {
  const { posts } = await executeGraphql({
    query: PostsGetListDocument,
  });

  return (
  <div className="min-h-[calc(100vh-6.3rem)]">
  <PostsClient posts={posts} />
  </div>
  );
}
