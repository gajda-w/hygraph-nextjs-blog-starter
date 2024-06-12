import { unstable_noStore as noStore } from "next/cache";
import { PostsClient } from "./PostClient";
import { PostsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export default async function Posts() {
  noStore();
  const { posts } = await executeGraphql(PostsGetListDocument);

  return <PostsClient posts={posts} />;
}
