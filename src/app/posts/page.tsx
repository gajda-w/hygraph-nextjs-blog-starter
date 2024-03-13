import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { PostsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export const Posts = async () => {
  const posts = await executeGraphql(PostsGetListDocument);

  return (
    <ul className="p-5flex-wrap flex min-h-screen items-center justify-center gap-5">
      {posts.posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.id}>
          <PostCard post={post} key={post.id} />
        </Link>
      ))}
    </ul>
  );
};

export default Posts;
