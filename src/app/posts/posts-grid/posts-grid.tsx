import { PostCard } from "@/components/post-card";
import { type PostsGetListQuery } from "@/gql/graphql";

interface IPostGridProps {
  posts: PostsGetListQuery["posts"];
}

export default async function PostsGrid({posts}: IPostGridProps) {
  return (
    <div className="flex min-h-[calc(100vh-6.3rem)] w-full flex-col items-center justify-center">
      <h1 className="my-10 text-4xl">All posts</h1>
      <div className="flex w-full flex-row justify-center">
        <ul className="mb-10 grid w-full md:w-11/12 grid-cols-2 md:grid-cols-4 md:gap-5 md:px-10 justify-items-center ">
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
