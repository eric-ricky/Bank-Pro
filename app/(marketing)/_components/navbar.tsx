"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="md:px-4 lg:px-6 h-20 flex items-center">
      <div className="container mx-auto flex items-center">
        <Logo />

        <NavigationMenu className="hidden md:flex ml-10">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <div className="grid gap-1">
                    <h3 className="font-bold">Personal Banking</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage your personal finances with ease
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="font-bold">Business Banking</h3>
                    <p className="text-sm text-muted-foreground">
                      Powerful tools for your business growth
                    </p>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <div className="grid gap-1">
                    <h3 className="font-bold">Online Banking</h3>
                    <p className="text-sm text-muted-foreground">
                      24/7 access to your accounts
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="font-bold">Mobile Banking</h3>
                    <p className="text-sm text-muted-foreground">
                      Bank on the go with our mobile app
                    </p>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/dashboard">About</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-4">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/dashboard"
          >
            Sign In
          </Link>
          <Button asChild>
            <Link href={"/dashboard"}>Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
