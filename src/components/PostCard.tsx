/* eslint-disable @next/next/no-img-element */
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
    <li className="transform list-none rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
      <Card className="w-[300px] overflow-hidden rounded-xl">
        <CardHeader className="pb-4 text-center">
          <CardTitle className="line-clamp-3">{post.title}</CardTitle>
        </CardHeader>
        <CardDescription className="line-clamp-3 px-4 text-center">{post.excerpt}</CardDescription>
        <CardContent className="group p-4">
          <img className="rounded-lg" src={post.coverImage?.url} alt="Unable to load an image" />
        </CardContent>
        <CardFooter className="flex items-center justify-between px-3 py-2">
          <p className="text-xs">{post?.date ? (post.date as string) : ""}</p>
          <p className="text-xs italic">
            {post.author?.name ? `${post.author?.name}` : "Author unknown"}
          </p>
        </CardFooter>
      </Card>
    </li>
  );
};

PostCard.displayName = "PostCard";
