import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { type Item } from "@/components/Header";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const HamburgerMenu = ({ items }: { items: Item[] }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="p-2 md:hidden"
        onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
      >
        <Menu size={30} />
      </button>
      <div>
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
                  <NavigationMenuItem key={item.id} className="text-white">
                    <Link href={item.url} legacyBehavior passHref>
                      <NavigationMenuLink onClick={() => setIsMobileMenuVisible(false)}>
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

HamburgerMenu.displayName = "HamburgerMenu";
