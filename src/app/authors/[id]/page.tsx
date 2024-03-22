import { notFound } from "next/navigation";
import Image from "next/image";
import { ChevronsUpDown } from "lucide-react";
import { AuthorByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";
import { AuthorCard } from "@/components/author-card";
import { PostCard } from "@/components/post-card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
      <CardHeader className="hidden border-2 border-x-0 border-black p-0 py-5 text-2xl font-bold dark:border-[#1F2937] md:flex md:flex-row ">
        <CardTitle className="flex w-full flex-row justify-center md:w-1/3">AUTHOR</CardTitle>
        <CardTitle className="w-2/3 justify-center md:flex md:flex-row">ARTICLES</CardTitle>
      </CardHeader>
      <CardContent className="m-0 flex w-full flex-col justify-between p-0 md:flex-row">
        <CardHeader className="m-0 border-2 border-x-0 border-black py-5 text-2xl font-bold dark:border-[#1F2937] md:hidden">
          <CardTitle className="flex flex-row justify-center">AUTHOR</CardTitle>
        </CardHeader>

        <CardContent className="flex w-full flex-col justify-center  px-5  md:w-1/3 md:justify-start lg:mx-5 lg:my-3">
          <Card className="border-none pt-8 shadow-none">
            <AuthorCard author={dataAuthor.author} />
          </Card>
          <Collapsible className="mt-3 transform transition-transform duration-300">
            <Card className="flex flex-col py-2">
              <CollapsibleTrigger className="flex w-full flex-row items-center">
                <CardTitle className="w-4/5 text-base">Authors Biography</CardTitle>
                <ChevronsUpDown className="flex size-5 w-1/5" />
              </CollapsibleTrigger>
              <CollapsibleContent
                className={`${dataAuthor.author.biography ? "text-justify" : "text-center"} px-3 pt-1  text-sm`}
              >
                {dataAuthor.author.biography ? dataAuthor.author.biography : "No biography yet."}
              </CollapsibleContent>
            </Card>
          </Collapsible>
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
      <div className="hidden md:block"></div>
    </Card>
  );
};

export default Author;
