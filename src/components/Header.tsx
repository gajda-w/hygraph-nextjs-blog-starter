"use client";

import * as React from "react";
import Link from "next/link";
import { Feather } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export type Item = {
  label: string;
  url: string;
  id: string;
};

export const Header = ({ items }: { items: Item[] }) => {
  return (
    <NavigationMenu className="bg:white max-w-full dark:bg-black">
      <NavigationMenuList className="flex min-w-96 justify-between">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Feather />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {items.map((item) => (
            <Link href={item.url} legacyBehavior passHref key={item.id}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.label}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
