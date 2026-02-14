"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { EllipsisVertical, MoreVertical, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileUserSigninOrAvatar from "./mobile-user-signinoravatar";

interface MenuClientProps {
  desktopAvatar: React.ReactNode;
}

export default function MenuClient({ desktopAvatar }: MenuClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const handleSheetCloseAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* ====================================================== */}
      {/* Desktop & Tablet Nav (No Changes)                      */}
      {/* ====================================================== */}
      <nav className="hidden items-center gap-3 md:flex">
        <ThemeToggle />

        <Link
          href="/"
          className="body-regular text-text-body hover:text-primary"
        >
          Home
        </Link>

        {/* Book Appointment Button */}
        <Button asChild variant="brand" size="lg">
          <Link href="/" className="text-text-caption-2">
            Book Appointment
          </Link>
        </Button>

        {/* Sign In Button */}
        {desktopAvatar}
      </nav>

      {/* ====================================================== */}
      {/* Mobile Nav (Implementation using Shadcn Sheet)         */}
      {/* ====================================================== */}
      <nav className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger
            className="align-middle"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent
            className="flex flex-col items-start p-4 bg-background-2"
            side="right"
            onCloseAutoFocus={handleSheetCloseAutoFocus}
          >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ThemeToggle />
            <Link
              href="/"
              className="body-regular text-text-body hover:text-primary"
              onClick={closeMobileMenu} // Close menu on link click
            >
              Home
            </Link>

            <Button asChild variant="brand" size="sm" className="w-full">
              <Link
                href="/"
                className="text-text-caption-2"
                onClick={closeMobileMenu}
              >
                Book Appointment
              </Link>
            </Button>

            <SheetFooter className="w-full">
              {<MobileUserSigninOrAvatar onMobileActionComplete={closeMobileMenu} />}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
