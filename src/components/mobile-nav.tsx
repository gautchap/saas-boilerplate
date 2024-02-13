"use client";

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Archivo_Black } from "next/font/google";
import Link from "next/link";

const archivo_black = Archivo_Black({ weight: ["400"], subsets: ["latin"] });

export default function MobileNav() {
    return (
        <nav className="flex md:hidden">
            <Sheet>
                <SheetTrigger>
                    <HamburgerMenuIcon className="size-7" />
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <ul className={archivo_black.className}>
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
