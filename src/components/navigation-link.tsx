import { type LinkFragment } from "@/gql/graphql";
import { NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export const NavigationLink = ({
  navigationLink,
  className,
}: {
  navigationLink: LinkFragment;
  className?: string;
}) => {
  return (
    <NavigationMenuLink
      href={`/${navigationLink.slug as string}`}
      className={`${navigationMenuTriggerStyle()} ${className}`}
    >
      {navigationLink.displayText}
    </NavigationMenuLink>
  );
};
