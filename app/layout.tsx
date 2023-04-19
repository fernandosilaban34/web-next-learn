import { Suspense } from "react";
import Navbar from "./nav-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <div>{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
