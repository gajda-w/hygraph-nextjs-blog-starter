import * as React from "react";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "../../providers.tsx";
import { Header, type Item } from "../components/header";
import { Footer } from "../components/footer";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

const items: Item[] = [
  { label: "Home", url: "/", id: "1" },
  { label: "Posts", url: "/posts", id: "2" },
  { label: "Authors", url: "/authors", id: "3" },
  { label: "Account", url: "/account", id: "4" },
];
const navId = "main";

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
          <Navigation navId={navId} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
