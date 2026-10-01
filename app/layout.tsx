import type { Metadata } from "next";
import Link from "next/link";
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
      <body className={urbanist.className}>
        <header className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="mx-auto flex w-full max-w-6xl justify-end px-6 py-5">
            <nav aria-label="Primary navigation">
              <ul className="flex items-center gap-4 text-base font-normal tracking-tight sm:gap-8 sm:text-lg lg:gap-12">
                <li>
                  <Link
                    href="/educator"
                    className="transition-opacity hover:opacity-60"
                  >
                    Educator
                  </Link>
                </li>

                <li>
                  <Link
                    href="/designer"
                    className="transition-opacity hover:opacity-60"
                  >
                    Designer
                  </Link>
                </li>

                <li>
                  <Link
                    href="/photographer"
                    className="transition-opacity hover:opacity-60"
                  >
                    Photographer
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}