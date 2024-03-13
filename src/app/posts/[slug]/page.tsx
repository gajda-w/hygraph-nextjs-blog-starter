/* eslint-disable @next/next/no-img-element */
import React from "react";

import { notFound } from "next/navigation";
import { PostBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function processTextToElements(text: string): JSX.Element[] {
  const sentences = text.split(". ");
  const elements: JSX.Element[] = [];
  let addIndentationNext = false;

  sentences.forEach((sentence, index) => {
    if (sentence.trim()) {
      const className = addIndentationNext ? "indent-10 inline-block" : "";
      if (addIndentationNext) addIndentationNext = false;

      elements.push(
        <span key={`sentence-${index}`} className={className}>
          {sentence.trim() +
            (index < sentences.length - 1 && sentence.endsWith("." || ". ") ? "" : ".")}
        </span>,
      );

      if ((index + 1) % 5 === 0 && index !== sentences.length - 1) {
        elements.push(<br key={`break-${index}`} />, <br key={`break-additional-${index}`} />);
        addIndentationNext = true;
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
    <main className="flex min-h-screen flex-col items-center justify-between gap-10 px-24 py-5">
      <h1 className="flex text-center text-4xl font-extrabold italic">{post.post?.title}</h1>
      <div className="flex flex-row  gap-10">
        <Dialog>
          <DialogTrigger>
            {" "}
            <img
              className="max-w-xl rounded-lg hover:opacity-90"
              src={post.post?.coverImage?.url}
              alt="Image"
            />
          </DialogTrigger>
          <DialogContent className="h-[600px] w-[2300px]">
            <img className="rounded-lg" src={post.post?.coverImage?.url} alt="Image" />
          </DialogContent>
        </Dialog>
        <div className="flex w-full flex-col justify-center gap-5 pt-3">
          <p className="flex w-full  items-center text-3xl">{post.post?.excerpt}</p>
          <p className="flex justify-end">
            {post.post?.author?.name ? `~${post.post?.author.name}` : ""}
          </p>
        </div>
      </div>
      <div className="w-full">
        <p className="w-full text-justify indent-10">
          {processTextToElements(post.post?.content.text || "")}
        </p>
      </div>
    </main>
  );
}
