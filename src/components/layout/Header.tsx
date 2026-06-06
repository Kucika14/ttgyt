"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { navigation } from "@/content";

const navLinks = navigation.links;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          aria-label={navigation.logoLabel}
        >
          <Image
            src="/logo.png"
            alt={navigation.logoLabel}
            width={200}
            height={120}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label={navigation.mainNavAriaLabel} className="hidden md:block">
          <ul className="flex items-center gap-6" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
                    pathname === href ? "text-primary" : "text-muted-foreground"
                  )}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={navigation.mobileMenuToggleLabel}
            >
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="sr-only">{navigation.mobileNavAriaLabel}</SheetTitle>
            <nav aria-label={navigation.mobileNavAriaLabel} className="mt-8">
              <ul className="flex flex-col gap-2" role="list">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        pathname === href
                          ? "bg-muted text-primary"
                          : "text-foreground"
                      )}
                      aria-current={pathname === href ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
