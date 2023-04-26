"use client"
import { Suspense } from "react";
import { SessionProvider } from "next-auth/react"
import Navbar from "./nav-bar";

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <div>{children}</div>
          </Suspense>
        </SessionProvider>
      </body>
    </html>
  );
}
