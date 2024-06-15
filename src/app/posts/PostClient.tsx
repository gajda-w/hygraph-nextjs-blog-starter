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
        className="max-w-10/12 flex min-h-[600px] flex-row items-center justify-center"
      >
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem key={index} className="md:basis-5/12 lg:basis-1/2 flex flex-col items-center">
              <PostCard post={post} key={post.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {isMdOrLarger ? <CarouselPrevious /> : <></>}
        {isMdOrLarger ? <CarouselNext /> : <></>}
      </Carousel>
    </div>
  );
}
