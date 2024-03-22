import Link from "next/link";
import { NavigationDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export const Navigation = async ({ navId }: { navId: string }) => {
  const navigations = await executeGraphql(NavigationDocument, {
    navId: navId,
  });
  return (
    <ul>
      {navigations.navigation?.link.map(({ displayText, slug }) => (
        <li key={slug}>
          <Link className="text-2xl font-bold" href={`/${slug as string}`}>
            {displayText}
          </Link>
        </li>
      ))}
    </ul>
  );
};
