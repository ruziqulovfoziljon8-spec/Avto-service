"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import { Navbar } from "./Navbar/page";

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
        {isAutoPage && <Navbar />}


        <main>{children}</main>
      </body>
    </html>
  );
}
