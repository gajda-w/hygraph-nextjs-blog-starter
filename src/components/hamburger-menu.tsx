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

const navId = "main-navigation";

export const HamburgerMenu = () => {
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
              <Navigation navId={navId} />
            </NavigationMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

HamburgerMenu.displayName = "HamburgerMenu";
