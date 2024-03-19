import { PostCard } from "@/components/PostCard";
import { PostsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export default async function Posts() {
  const posts = await executeGraphql(PostsGetListDocument);

  return (
    <ul className="flex min-h-[calc(100vh-7rem)] flex-wrap items-center justify-center gap-5 py-5">
      {posts.posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ul>
  );
}
