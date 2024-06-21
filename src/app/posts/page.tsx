import PostsGrid from "./posts-grid/posts-grid";
import { executeGraphql } from "@/lib/graphql";
import { PostsGetListDocument } from "@/gql/graphql";

export default async function Posts() {

const { posts } = await executeGraphql({
  query: PostsGetListDocument,
  });

  return (
    <>
    <PostsGrid posts={posts}/>
    </>
  );
}
