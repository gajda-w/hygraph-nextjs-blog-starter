"use client";
import { useEffect, useState } from "react";
import { PostCard } from "@/components/post-card";
import { type PostsGetListQuery } from "@/gql/graphql";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PostsCarouselProps {
  posts: PostsGetListQuery["posts"];
}

export function PostsCarousel({ posts }: PostsCarouselProps) {

    const [isMdOrLarger, setIsMdOrLarger] = useState(false);

    useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const orientation = isMdOrLarger ? "horizontal" : "vertical";

  return (
    <div className="flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation={orientation}
        className="max-w-10/12 flex min-h-[600px] flex-col items-center justify-center md:flex-row"
      >
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center md:basis-5/12 lg:basis-1/2"
            >
              <PostCard post={post} key={post.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:grid" />
        <CarouselNext className="hidden md:grid" />
      </Carousel>
    </div>
  );
}
