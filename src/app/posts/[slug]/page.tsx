/* eslint-disable @next/next/no-img-element */
import React from "react";

import { notFound } from "next/navigation";
import { PostBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

function processTextToElements(text: string): JSX.Element[] {
  const sentences = text.split(". ");
  const elements: JSX.Element[] = [];

  sentences.forEach((sentence, index) => {
    if (sentence.trim()) {
      elements.push(
        <span key={`sentence-${index}`}>
          {sentence.trim() +
            (index < sentences.length - 1 && sentence.endsWith("." || ". ") ? "" : ".")}
        </span>,
      );

      if ((index + 1) % 5 === 0 && index !== sentences.length - 1) {
        elements.push(<br key={`break-${index}`} />, <br key={`break-additional-${index}`} />);
      }
    }
  });
  return elements;
}

export default async function Post({ params: { slug } }: { params: { slug: string } }) {
  const post = await executeGraphql(PostBySlugDocument, {
    slug: slug,
  });

  if (!post) {
    return notFound();
  }

  return (
    <main className="flex min-h-[calc(100vh-7.5rem)] flex-col items-center justify-between gap-5 px-10 py-5 md:gap-10 md:px-16 lg:px-24">
      <h1 className="mt-5 flex text-center text-xl font-extrabold italic md:text-2xl lg:text-3xl">
        {post.post?.title}
      </h1>
      <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
        <img
          className="flex max-w-full justify-center rounded-lg md:max-w-sm lg:max-w-lg"
          src={post.post?.coverImage?.url}
          alt="Image"
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
        <p className="w-full text-justify text-sm md:text-lg">
          {processTextToElements(post.post?.content.text || "")}
        </p>
      </div>
    </main>
  );
}
