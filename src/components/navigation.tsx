import Link from "next/link";
import { NavigationDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export async function Navigation({ navId }: { navId: string }) {
  const navigations = await executeGraphql({ query: NavigationDocument, variables: { navId } });
  return (
    <NavigationMenu className="max-w-ful hidden md:flex">
      <NavigationMenuList className="flex justify-between">
        {navigations.navigation?.link.map(({ displayText, slug }) => (
          <NavigationMenuItem key={slug}>
            <Link href={`/${slug as string}`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {displayText}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
