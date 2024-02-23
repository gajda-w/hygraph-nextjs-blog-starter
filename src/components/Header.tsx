"use client";

import * as React from "react";
import Link from "next/link";
import { Feather } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type Item = {
  label: string;
  url: string;
  id: string;
};

export const Header = ({ items }: { items: Item[] }) => {
  return (
    <header className="sticky top-0 isolate z-10 justify-between border-b-2 border-gray-200 py-4 dark:border-gray-800">
      <div className="container">
        <div className="flex justify-between">
          <Link href="/" legacyBehavior passHref>
            <Feather />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {items.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <Link href={item.url} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
