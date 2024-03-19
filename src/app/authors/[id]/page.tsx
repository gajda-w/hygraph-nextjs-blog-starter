import { notFound } from "next/navigation";
import Image from "next/image";
import { AuthorByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";
import { AuthorCard } from "@/components/AuthorCard";
import { PostCard } from "@/components/PostCard";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export const Author = async ({ params: { id } }: { params: { id: string } }) => {
  const dataAuthor = await executeGraphql(AuthorByIdDocument, {
    id: id,
  });

  if (!dataAuthor || !dataAuthor.author) {
    return notFound();
  }
  return (
    <Card className="m-0 flex min-h-[calc(100vh-7rem)] flex-col justify-between gap-5 border-none">
      <CardHeader className="flex flex-row  border-2 border-x-0 border-black p-0 py-5 text-2xl font-bold dark:border-[#1F2937] lg:pl-4">
        <CardTitle className="flex w-1/3 flex-row justify-center">AUTHOR</CardTitle>
        <CardTitle className="hidden w-2/3 justify-center md:flex md:flex-row">ARTICLES</CardTitle>
      </CardHeader>
      <CardContent className="m-0 flex w-full flex-col justify-center p-0 md:flex-row md:justify-between">
        <CardContent className="block w-full px-5 md:my-10 md:w-1/3 lg:mx-5 lg:my-[51px]">
          <AuthorCard author={dataAuthor.author} />
        </CardContent>
        <CardHeader className="m-0 w-full border-2 border-x-0 border-black p-0 py-5 text-2xl font-bold md:hidden">
          <CardTitle className="m-0 flex w-full flex-row justify-center p-0">ARTICLES</CardTitle>
        </CardHeader>
        <CardContent
          className={`mb-5 mt-10 flex w-full flex-wrap justify-center gap-5 p-0 lg:w-2/3 `}
        >
          {dataAuthor.author?.posts.length > 0 ? (
            <>
              {dataAuthor.author.posts.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
              {dataAuthor.author.posts.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
              {dataAuthor.author.posts.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
            </>
          ) : (
            <div className="flex w-2/5 min-w-[160px] flex-col p-0 md:w-1/4 md:max-w-[300px] lg:m-3">
              <div className="max-h-96 transform list-none rounded-lg p-0 transition-transform duration-300 ease-in-out hover:scale-105">
                <Card className="overflow-hidden rounded-xl">
                  <CardHeader className="pb-4 text-center">
                    <CardTitle className="line-clamp-3 text-lg leading-5 md:font-semibold md:leading-6 lg:text-2xl">
                      No articles yet
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="line-clamp-3 px-4 text-center">
                    {`This author didn't write any article yet`}
                  </CardDescription>
                  <CardContent className="group hidden p-4 md:block">
                    <Image
                      className="rounded-lg"
                      src="/images/question-mark.jpg"
                      alt="Unable to load an image"
                      width={600}
                      height={300}
                      quality={100}
                    />
                  </CardContent>
                  <CardFooter className="flex items-center justify-center px-3 py-2 md:justify-between">
                    <CardDescription className="hidden text-xs md:inline-block">
                      Unknown Date
                    </CardDescription>
                    <CardDescription className="text-xs italic">
                      {dataAuthor.author?.name}
                    </CardDescription>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
      </CardContent>
      <div></div>
    </Card>
  );
};

export default Author;
