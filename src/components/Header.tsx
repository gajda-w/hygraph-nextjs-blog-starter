// Assuming "use client" is specific to your environment; ensure it's correctly applied.
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Feather, Menu, X, Smile } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

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
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  return (
    <header className="sticky top-0 isolate z-10 py-4">
      <div className="container">
        <div className="grid w-full grid-flow-col grid-cols-[repeat(3,1fr)] items-center justify-items-center gap-4">
          <Link href="/" legacyBehavior passHref>
            <Feather className={`cursor-pointer ${navigationMenuTriggerStyle()}`} />
          </Link>
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
          >
            {isMobileMenuVisible ? <Smile /> : <Menu size={30} />}
          </button>
          <NavigationMenu className="max-w-ful hidden md:flex">
            <NavigationMenuList className="flex justify-between">
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
          {isMobileMenuVisible && (
            <div
              className={`fixed inset-0 z-40 flex transform flex-col items-end bg-black bg-opacity-90 transition-transform duration-300 md:hidden ${isMobileMenuVisible ? "translate-x-0" : "translate-x-full"}`}
            >
              <button
                onClick={() => setIsMobileMenuVisible(false)}
                className="m-4 items-end p-2 text-white"
              >
                <X size="30" />
              </button>
              <div className="flex h-screen w-full place-content-center items-center">
                <NavigationMenu className="h-full w-full">
                  <NavigationMenuList className="flex flex-col gap-4 text-3xl">
                    {items.map((item) => (
                      <NavigationMenuItem key={item.id}>
                        <Link href={item.url} passHref>
                          <NavigationMenuLink
                            className="text-white"
                            onClick={() => setIsMobileMenuVisible(false)}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
