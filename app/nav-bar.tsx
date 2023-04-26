import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/posts">post</Link>
      <div>
        {
          session?.user ?
            <button onClick={() => signOut()}>Sign Out</button>
            :
            <button onClick={() => signIn()}>Sign In</button>
        }
      </div>
    </nav>
  );
}
