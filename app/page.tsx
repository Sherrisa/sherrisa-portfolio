import Image from "next/image";
import Link from "next/link";
import { oswald } from "./fonts";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-700">
      {/* Header */}
      <header className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex w-full max-w-6xl justify-end px-6 py-5">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-8 text-lg font-normal tracking-tight sm:gap-12">
              <li>
                <Link
                  href="#educator"
                  className="transition-opacity hover:opacity-60"
                >
                  Educator
                </Link>
              </li>

              <li>
                <Link
                  href="#designer"
                  className="transition-opacity hover:opacity-60"
                >
                  Designer
                </Link>
              </li>

              <li>
                <Link
                  href="#photographer"
                  className="transition-opacity hover:opacity-60"
                >
                  Photographer
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-8 pb-16">
        <h1
          className={`${oswald.className} text-5xl font-normal leading-[0.95] text-[#bed95b] sm:text-7xl lg:text-8xl`}
        >
          <span className="block">Sherrisa</span>
          <span className="block pl-6 sm:pl-12">Classon</span>
        </h1>

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <Image
            src="/images/wildflowers.jpeg"
            alt="Orange watercolor wildflowers"
            width={1200}
            height={800}
            priority
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* Temporary anchor sections */}
      <section
        id="educator"
        className="mx-auto w-full max-w-6xl px-6 py-24"
      >
        <h2
          className={`${oswald.className} text-4xl font-normal text-[#bed95b]`}
        >
          Educator
        </h2>
      </section>

      <section
        id="designer"
        className="mx-auto w-full max-w-6xl px-6 py-24"
      >
        <h2
          className={`${oswald.className} text-4xl font-normal text-[#bed95b]`}
        >
          Designer
        </h2>
      </section>

      <section
        id="photographer"
        className="mx-auto w-full max-w-6xl px-6 py-24"
      >
        <h2
          className={`${oswald.className} text-4xl font-normal text-[#bed95b]`}
        >
          Photographer
        </h2>
      </section>
    </main>
  );
}