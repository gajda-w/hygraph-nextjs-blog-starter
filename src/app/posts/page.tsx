import { PostsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export default async function Page() {
  const posts = await executeGraphql(PostsGetListDocument);

  console.log("posts", posts);

  return <div>{JSON.stringify(posts)}</div>;
}
