import { notFound } from "next/navigation";
import Image from "next/image";
import { AuthorByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";
import { AuthorCard } from "@/components/AuthorCard";
import { PostCard } from "@/components/PostCard";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Author = async ({ params: { id } }: { params: { id: string } }) => {
  const dataAuthor = await executeGraphql(AuthorByIdDocument, {
    id: id,
  });

  if (!dataAuthor || !dataAuthor.author) {
    return notFound();
  }
  return (
    <div className="m-0 flex min-h-[calc(100vh-7rem)] flex-col justify-between gap-5">
      <div className="lg:px- border-2 border-x-0 border-black py-5 pl-8 text-2xl font-bold lg:flex lg:flex-row lg:justify-between">
        <p className="flex flex-row justify-center lg:pl-8 lg:text-start">AUTHOR</p>
        <p className="hidden w-3/5 pl-6 lg:inline-block">ARTICLES</p>
      </div>
      <div className="flex w-full flex-col justify-center gap-5 lg:flex-row lg:justify-between lg:px-5">
        <div className="m-auto my-10 block w-full px-5 md:w-1/2 lg:mx-5 lg:w-1/3">
          <AuthorCard author={dataAuthor.author} />
        </div>
        <div className="m-0 border-2 border-x-0 border-black py-5 text-2xl font-bold lg:hidden">
          <p className="flex flex-row justify-center">ARTICLES</p>
        </div>
        <div className="my-5 flex w-full flex-wrap justify-center gap-5 md:justify-evenly lg:w-4/6 lg:justify-start lg:pl-16">
          {dataAuthor.author?.posts.length > 0 ? (
            <>
              {dataAuthor.author.posts.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
            </>
          ) : (
            <div className="flex w-2/5 min-w-[160px] flex-col md:w-1/4 md:max-w-[300px] lg:m-3">
              <li className="max-h-96 transform list-none rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <Card className="overflow-hidden rounded-xl">
                  <CardHeader className="pb-4 text-center">
                    <CardTitle className="line-clamp-3 text-lg leading-5 md:font-semibold md:leading-6 lg:text-2xl">
                      No aritcles yet
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
                    <p className="hidden text-xs md:inline-block">Unknown Date</p>
                    <p className="text-xs italic">{dataAuthor.author?.name}</p>
                  </CardFooter>
                </Card>
              </li>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Author;
