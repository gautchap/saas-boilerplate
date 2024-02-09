"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { PinRightIcon } from "@radix-ui/react-icons";

export default function LogoutButton() {
    return (
        <DropdownMenuItem
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex cursor-pointer items-center justify-between"
        >
            <p className="font-medium text-red-500 hover:text-red-500">Sign Out</p>
            <PinRightIcon className="text-red-500" />
        </DropdownMenuItem>
    );
}
