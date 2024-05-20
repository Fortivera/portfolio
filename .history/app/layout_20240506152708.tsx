import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anton Strelkovkyy",
  description: "Personal website of Anton Strelkovkyy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#c2b3b3] antialiased",
          inter.className,
          figtree.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
