"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const routes = [
  {
    href: "",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

export const DesktopSidebar = () => {
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];

  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>

      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                route.href === activeRoute.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];

  return (
    <div className="md:hidden block border-separate bg-background">
      <nav className="flex items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent
            className="w-[320px] sm:w-[500px] space-y-4"
            side={"left"}
          >
            <Logo />

            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={buttonVariants({
                    variant:
                      route.href === activeRoute.href
                        ? "sidebarActiveItem"
                        : "sidebarItem",
                  })}
                  onClick={() => setIsOpen(false)}
                >
                  <route.icon size={20} />
                  <span className="ml-2">{route.label}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};