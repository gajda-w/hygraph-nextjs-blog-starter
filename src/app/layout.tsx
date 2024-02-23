// RootLayout.tsx
import * as React from "react";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const items: Item[] = [
  { label: "Home", url: "/", id: "1" },
  { label: "Posts", url: "/posts", id: "2" },
  { label: "Account", url: "/account", id: "3" },
];

export type Item = {
  label: string;
  url: string;
  id: string;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header items={items} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
