import type { Metadata } from "next";
import { urbanist } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sherrisa",
  description: "Educator, designer, and photographer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}