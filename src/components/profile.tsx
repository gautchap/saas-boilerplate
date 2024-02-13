import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Session } from "next-auth";
import LogoutButton from "@/components/logout-button";
import Avvvatars from "avvvatars-react";

export default function Profile({ session }: { session: Session }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="rounded-full bg-muted" variant="ghost" size="icon">
                    {session.user.image ? (
                        <Avatar>
                            <AvatarImage src={session.user.image} className="rounded-full p-1" />
                        </Avatar>
                    ) : (
                        <Avvvatars value={session.user.email.toUpperCase()} />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex cursor-pointer items-center justify-between">
                    <Link href="/me">My account</Link>
                </DropdownMenuItem>
                <LogoutButton />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
