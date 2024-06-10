import Link from "next/link";
import Image from "next/image";
import { type PostFragment } from "@/gql/graphql";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const PostCard = ({ post }: { post: PostFragment }) => {
  return (
    <li className="flex w-2/5 min-w-[160px] flex-col md:w-1/4 md:max-w-[300px] lg:m-3">
      <Link href={`/posts/${post.slug}`} key={post.id} className="">
        <Card className="max-h-96 transform list-none rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105">
          <Card className="flex flex-col justify-between overflow-hidden rounded-xl">
            <CardHeader className="pb-4 text-center ">
              <CardTitle className="line-clamp-3 text-lg leading-5 md:font-semibold md:leading-6 lg:text-2xl">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardDescription className="line-clamp-3 px-4 text-center">
              {post.excerpt}
            </CardDescription>
            <CardContent className="group grow p-4 md:block">
              <Image
                className="rounded-lg"
                src={post.coverImage?.url as string}
                alt="Unable to load an image"
                width={600}
                height={300}
                quality={100}
              />
            </CardContent>
            <CardFooter className="flex items-center justify-center px-3 py-2 md:justify-between">
              <p className="hidden text-xs md:inline-block">
                {post?.date ? (post.date as string) : ""}
              </p>

              {post.author?.name ? (
                <p className="text-xs italic">{post.author?.name}</p>
              ) : (
                <p className="text-xs italic">Author unknown</p>
              )}
            </CardFooter>
          </Card>
        </Card>
      </Link>
    </li>
  );
};

PostCard.displayName = "PostCard";
