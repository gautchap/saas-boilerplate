"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginButton({ session }: { session: Session | null }) {
    return (
        <>
            {session ? (
                <Button variant="outline" onClick={() => signOut()}>
                    Se déconnecter
                </Button>
            ) : (
                <Button variant="outline" onClick={() => signIn()}>
                    Se Connecter
                </Button>
            )}
        </>
    );
}
