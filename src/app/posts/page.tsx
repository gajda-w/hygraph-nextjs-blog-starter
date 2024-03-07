import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { PostsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export default async function Page() {
  const posts = await executeGraphql(PostsGetListDocument);

  return (
    <main className="flex min-h-96 flex-col items-center justify-between p-24">
      <ul className="flex flex-wrap items-center justify-center gap-10">
        {posts.posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.id}>
            <PostCard post={post} key={post.id} />
          </Link>
        ))}
      </ul>
    </main>
  );
}
