import { AuthorCard } from "@/components/author-card";
import { executeGraphql } from "@/lib/graphql";
import { AuthorsGetListDocument } from "@/gql/graphql";

export default async function Authors() {
  const authors = await executeGraphql({
    query: AuthorsGetListDocument,
  });

  return (
    <div className="flex min-h-[calc(100vh-7rem)] flex-col content-center justify-center gap-5  p-5 md:flex-row md:flex-wrap">
      {authors.authors.map((author) => (
        <AuthorCard author={author} key={author.id} />
      ))}
    </div>
  );
}
