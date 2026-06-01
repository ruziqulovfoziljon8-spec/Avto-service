"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import { Navbar2 } from "./Navbar/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAutoPage = pathname.includes("/autoservice");
  return (
    <html lang="uz">
      <body>
        {isAutoPage && <Navbar2 />}


        <main>{children}</main>
      </body>
    </html>
  );
}
