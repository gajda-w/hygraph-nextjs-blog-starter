import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { PostsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export const Posts = async () => {
  const posts = await executeGraphql(PostsGetListDocument);

  return (
    <ul className="flex min-h-[calc(100vh-8rem)] flex-wrap items-center justify-center gap-5 p-5">
      {posts.posts.map((post) => (
        <Link className="max-h-96" href={`/posts/${post.slug}`} key={post.id}>
          <PostCard post={post} key={post.id} />
        </Link>
      ))}
    </ul>
  );
};

export default Posts;
