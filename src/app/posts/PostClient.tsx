"use client";

import { useMediaQuery } from "@/components/hooks/useMediaQuery";
import { PostCard } from "@/components/post-card";
import { type PostsGetListQuery } from "@/gql/graphql";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PostsClientProps {
  posts: PostsGetListQuery["posts"];
}

export function PostsClient({ posts }: PostsClientProps) {
  const isMdOrLarger = useMediaQuery("(min-width: 768px)");
  const orientation = isMdOrLarger ? "horizontal" : "vertical";

  return (
    <div className="flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation={orientation}
        className="mt-5 flex min-h-[600px] w-10/12 flex-row items-center"
      >
        <CarouselContent className=" ">
          {posts.map((post, index) => (
            <CarouselItem
              key={index}
              className="my-5 flex  flex-row items-center justify-center p-0 md:basis-1/3 lg:basis-1/4"
            >
              <PostCard post={post} key={post.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
