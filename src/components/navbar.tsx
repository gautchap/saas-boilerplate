import DesktopNav from "@/components/desktop-nav";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import MobileNav from "@/components/mobile-nav";
import ThemeToggle from "@/components/theme-toggle";
import { ModalLogin } from "./modal-login";
import { getProviders } from "next-auth/react";
import Profile from "@/components/profile";

export default async function Navbar() {
    const session = await getServerSession(authOptions);
    const AllProviders = await getProviders();
    const providers = Object.keys(AllProviders || {});

    return (
        <>
            <div className="container flex items-center justify-between py-2">
                <DesktopNav />
                <MobileNav />
                <div className="flex items-center gap-2">
                    {session ? <Profile session={session} /> : <ModalLogin providers={providers} />}
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}
