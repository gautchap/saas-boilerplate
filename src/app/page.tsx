import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
    const session = await getServerSession(authOptions);

    return <div>{session ? <p>✅ {session.user.email}</p> : <p>❌ not logged</p>}</div>;
}
