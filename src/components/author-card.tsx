import Link from "next/link";
import { type AuthorFragment } from "@/gql/graphql";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AuthorCard({ author }:{ author: AuthorFragment }) {
  return (
    <Link
      href={`/authors/${author.id}`}
      key={author.id}
      className="m-0 w-full transform rounded-lg p-0 transition-transform duration-300 ease-in-out hover:scale-105 md:w-1/3"
    >
      <Card className="flex flex-row justify-start gap-5 p-3 ">
        <CardContent className="m-0 p-1">
          <Avatar className="size-20 align-middle">
            <AvatarImage
              src={author.picture?.url as string}
              alt={author.picture?.fileName as string}
            ></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
        <CardHeader className="w-auto items-start justify-center p-0">
          <CardTitle className="">{author.name}</CardTitle>
          <CardDescription>{author.title}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

AuthorCard.displayName = "AuthorCard";
