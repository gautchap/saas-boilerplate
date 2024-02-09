"use client";

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function MobileNav() {
    return (
        <nav className="flex md:hidden">
            <Sheet>
                <SheetTrigger>
                    <HamburgerMenuIcon className="size-7" />
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <ul>
                            <li className="text-center">
                                <SheetClose asChild>
                                    <Link href="/shop">shop</Link>
                                </SheetClose>
                            </li>
                        </ul>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
