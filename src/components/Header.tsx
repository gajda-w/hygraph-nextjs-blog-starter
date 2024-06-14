import React from "react";
import Link from "next/link";
import { Feather } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

import { HamburgerMenu } from "@/components/hamburger-menu";

import { NavigationDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export const Header = async () => {
  const navigationData = await executeGraphql({
    query: NavigationDocument,
    variables: { navId: "main-navigation" },
  });

  return (
    <div className="sticky z-50 mx-4">
      <header className="top-0 isolate z-10 py-4 md:sticky">
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Feather />
            </Link>
            <div className="hidden gap-8 md:flex">
              <div className="flex items-center gap-4">
                {navigationData.navigation?.link.map((link) => (
                  <Link key={link.slug} href={`/${link.slug}`}>
                    <div>{link.displayText}</div>
                  </Link>
                ))}
              </div>
              <ModeToggle />
            </div>
            <HamburgerMenu navigations={navigationData.navigation?.link} />
          </div>
        </div>
      </header>
    </div>
  );
};
