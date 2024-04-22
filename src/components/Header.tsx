"use client";

import React from "react";
import Link from "next/link";
import { Feather } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

import { NavigationMenu, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { HamburgerMenu } from "@/components/hamburger-menu";
import { Navigation } from "@/components/navigation";

export type Item = {
  label: string;
  url: string;
  id: string;
};

const navId = "main-navigation";

export const Header = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-white py-3 shadow dark:bg-gray-800">
      <div className="container">
        <div className="grid w-full grid-flow-col grid-cols-[repeat(3,1fr)] items-center justify-items-center gap-4">
          <Link href="/" legacyBehavior passHref>
            <Feather className={`cursor-pointe h-9 md:h-10 ${navigationMenuTriggerStyle()}`} />
          </Link>
          <HamburgerMenu />
          <NavigationMenu className="max-w-ful hidden md:flex">
            <Navigation navId={navId} />
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

Header.displayName = "Header";
