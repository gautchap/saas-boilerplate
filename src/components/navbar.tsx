import DesktopNav from "@/components/desktop-nav";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import MobileNav from "@/components/mobile-nav";
import ThemeToggle from "@/components/theme-toggle";
import LoginButton from "@/components/login-button";

export default async function Navbar() {
    const session = await getServerSession(authOptions);
    return (
        <>
            <div className="container flex items-center justify-between py-2">
                <DesktopNav />
                <MobileNav />
                <div className="flex items-center gap-2">
                    <LoginButton session={session} />
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}
