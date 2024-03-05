import * as React from "react";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "../../providers.tsx";
import { Header, type Item } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const items: Item[] = [
  { label: "Home", url: "/", id: "1" },
  { label: "Posts", url: "/posts", id: "2" },
  { label: "Account", url: "/account", id: "3" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header items={items} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
