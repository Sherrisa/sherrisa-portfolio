import type { Metadata } from "next";
import Link from "next/link";
import { urbanist } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sherrisa Classon",
  description: "Educator | Designer | Photographer",
  openGraph: {
    title: "Sherrisa Classon",
    description: "Educator | Designer | Photographer",
    images: [
      {
        url: "/images/wildflowers.jpeg",
        width: 1200,
        height: 800,
        alt: "Watercolor wildflowers",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {/* Shared navigation */}
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

        {/* Shared contact footer */}
        <footer className="mx-auto w-full max-w-6xl px-6 pt-16 pb-10 sm:pt-20">
          <div className="border-t border-neutral-200 pt-10 text-center">
            <p className="text-lg font-normal text-[#bed95b] sm:text-xl">
              Have a project, role, or idea in mind?
            </p>

            <div className="mt-6 flex items-center justify-center gap-8">
              <a
                href="mailto:sherrisaclasson@outlook.com"
                aria-label="Email Sherrisa"
                className="text-neutral-500 transition-opacity hover:opacity-60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5v10.5H3.75z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 7.5 8.25 6 8.25-6"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/sherrisa"
                target="_blank"
                rel="noreferrer"
                aria-label="Sherrisa on LinkedIn"
                className="text-neutral-500 transition-opacity hover:opacity-60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.25H3.25V19.5H6.5V8.25ZM4.875 3.5C3.84 3.5 3 4.34 3 5.375S3.84 7.25 4.875 7.25 6.75 6.41 6.75 5.375 5.91 3.5 4.875 3.5ZM20.75 13.25c0-3.39-1.81-4.97-4.23-4.97-1.95 0-2.82 1.07-3.31 1.82V8.25H9.96V19.5h3.25v-5.57c0-1.47.28-2.89 2.1-2.89 1.79 0 1.81 1.68 1.81 2.98v5.48h3.63v-6.25Z" />
                </svg>
              </a>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-neutral-400">
            © Sherrisa Classon 2026
          </p>
        </footer>
      </body>
    </html>
  );
}
