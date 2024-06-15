import { PostCard } from "@/components/post-card";
import { PostsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";


export default async function Posts() {
  const { posts } = await executeGraphql({
    query: PostsGetListDocument,
  });

  return (
    <div className="flex min-h-[calc(100vh-6.3rem)] w-full flex-col items-center">
        <h1 className=" text-4xl my-20">All posts</h1>
        <div className="flex flex-row justify-center w-full">
          <ul className="grid grid-cols-4 gap-5 w-11/12 px-10 mb-10" >
            {posts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
        </ul>
        </div>
    </div>
  );
}
