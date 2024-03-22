import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export type Item = {
  label: string;
  url: string;
  id: string;
};

export const HamburgerMenu = ({ items }: { items: Item[] }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-white" : "bg-black";
  const textColor = theme === "dark" ? "text-black" : "text-white";

  return (
    <div className="md:hidden">
      <button
        className={`p-2 md:hidden ${navigationMenuTriggerStyle()} ${!textColor}`}
        onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
      >
        <Menu size={25} />
      </button>
      <div>
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
              <NavigationMenuList className={`flex flex-col gap-4 text-3xl ${textColor}`}>
                {items.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <Link href={item.url} legacyBehavior passHref>
                      <NavigationMenuLink
                        className="font-bold"
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
      </div>
    </div>
  );
};

HamburgerMenu.displayName = "HamburgerMenu";
