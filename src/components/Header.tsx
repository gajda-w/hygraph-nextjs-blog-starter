"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Feather } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HamburgerMenu } from "@/components/hamburger-menu";
import { NavigationLink } from "@/components/navigation-link";
import { type NavigationQuery, NavigationDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

type NavigationData = NavigationQuery | null; // Define the type based on your actual data structure

export const Header = () => {
  const [navigationData, setNavigationData] = useState<NavigationData>(null);

  useEffect(() => {
    const fetchNavigation = async () => {
      const data: NavigationQuery = await executeGraphql(NavigationDocument, {
        navId: "main-navigation",
      });
      setNavigationData(data);
    };
    fetchNavigation().catch(console.error); // Handle promise correctly
  }, []);

  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-white py-3 shadow dark:bg-gray-800">
      <div className="container">
        <div className="grid w-full grid-flow-col grid-cols-[repeat(3,1fr)] items-center justify-items-center gap-4">
          <Link href="/" legacyBehavior passHref>
            <Feather
              className={`h-9 cursor-pointer px-2.5 py-2 md:h-10 ${navigationMenuTriggerStyle()}`}
            />
          </Link>
          <HamburgerMenu navigations={navigationData?.navigation?.link} />
          <NavigationMenu className="hidden max-w-full md:flex">
            <NavigationMenuList className="flex justify-between">
              {navigationData?.navigation?.link.map((link) => (
                <NavigationMenuItem key={link.slug}>
                  <NavigationLink navigationLink={link} className="mx-2 px-4 py-2 text-sm" />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
