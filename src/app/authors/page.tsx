import { AuthorCard } from "@/components/AuthorCard";
import { executeGraphql } from "@/lib/graphql";
import { AuthorsGetListDocument } from "@/gql/graphql";

export const Authors = async () => {
  const authors = await executeGraphql(AuthorsGetListDocument);

  return (
    <div className="flex min-h-[calc(100vh-7rem)] flex-col content-center justify-center gap-5  p-5 md:flex-row md:flex-wrap">
      {authors.authors.map((author) => (
        <AuthorCard author={author} key={author.id} />
      ))}
    </div>
  );
};

export default Authors;
