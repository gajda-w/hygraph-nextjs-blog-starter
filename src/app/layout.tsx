import * as React from "react";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { Providers } from "../../providers.tsx";

import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
