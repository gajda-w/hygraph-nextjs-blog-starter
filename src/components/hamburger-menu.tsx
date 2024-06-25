"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import { NavigationLink } from "@/components/navigation-link";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

type LinkType = {
  displayText?: string | null;
  slug?: string | null;
};

export function HamburgerMenu({ navigations }: { navigations: LinkType[] | undefined }) {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const bgColor = isClient ? (theme === "dark" ? "bg-white" : "bg-black") : "bg-black";
  const textColor = isClient ? (theme === "dark" ? "text-black" : "text-white") : "text-white";

  return (
    <div className="md:hidden">
      <button
        className={`h-9 px-2 md:hidden ${navigationMenuTriggerStyle()}`}
        onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
      >
        {isMobileMenuVisible ? <div className="size-6" /> : <Menu size={25} />}
      </button>
      {isClient && (
        <div
          className={`fixed inset-0 z-40 flex transform flex-col items-end ${bgColor} bg-opacity-90 transition-transform duration-300 md:hidden ${isMobileMenuVisible ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={() => setIsMobileMenuVisible(false)}
            className={`m-4 items-end p-2 ${textColor}`}
          >
            <X size="30" />
          </button>
          <div className="flex h-screen w-full place-content-center items-center">
            <NavigationMenu className="h-full w-full">
              <NavigationMenuList className={`flex flex-col gap-4 ${!textColor}`}>
                {navigations?.map((link) => (
                  <NavigationMenuItem key={link.slug} onClick={() => setIsMobileMenuVisible(false)}>
                    <NavigationLink navigationLink={link} className="p-6 text-xl" />
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      )}
    </div>
  );
};
