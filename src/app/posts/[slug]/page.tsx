import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { type RichTextContent } from "@graphcms/rich-text-types";
import { PostBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export default async function Post({ params: { slug } }: { params: { slug: string } }) {
  const post = await executeGraphql(PostBySlugDocument, {
    slug: slug,
  });

  if (!post) {
    return notFound();
  }

  return (
    <main className="flex min-h-[calc(100vh-7rem)] flex-col items-center justify-between gap-5 px-10 py-5 md:min-h-[calc(100vh-7rem)] md:gap-10 md:px-16 lg:px-24">
      <h1 className="mt-5 flex text-center text-xl font-extrabold italic md:text-2xl lg:text-3xl">
        {post.post?.title}
      </h1>
      <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
        <Image
          className="flex max-w-full justify-center rounded-lg md:max-w-sm lg:max-w-lg"
          src={post.post?.coverImage?.url as string}
          quality={100}
          alt="Image"
          width={800}
          height={600}
        />
        <div className="flex w-full flex-col gap-2 pt-3 md:gap-5">
          <p className="flex w-full items-center text-justify text-base md:text-lg lg:text-2xl">
            {post.post?.excerpt}
          </p>
          <p className="flex justify-end text-sm md:text-base lg:text-lg">
            {post.post?.author?.name ? `~${post.post?.author.name}` : ""}
          </p>
        </div>
      </div>
      <div className="w-full">
        <RichText
          content={post.post?.content.json as RichTextContent}
          renderers={{
            p: ({ children }) => (
              <p className="text-xl tracking-wider text-stone-500 dark:text-fuchsia-50">
                {children}
              </p>
            ),
            ol: ({ children }) => (
              <ol className="my-5 ml-6 list-decimal text-2xl tracking-wide text-fuchsia-50">
                {children}
              </ol>
            ),
            blockquote: ({ children }) => (
              <div className="mb-12 mt-10 flex">
                <div className="h-content mr-6 w-3 bg-white"></div>
                <div className="text-4xl tracking-wide text-fuchsia-50">{children}</div>
              </div>
            ),
            ul: ({ children }) => (
              <ul className="my-5 ml-6 list-disc text-3xl tracking-wide text-fuchsia-500">
                {children}
              </ul>
            ),
          }}
        />
      </div>
    </main>
  );
}
