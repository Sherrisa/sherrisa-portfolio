import Link from "next/link";
import { oswald } from "../fonts";

export default function PhotographerPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-700">
      <section className="mx-auto w-full max-w-6xl px-6 pt-8 pb-16">
        <Link
          href="/"
          className="mb-8 inline-block text-base font-normal tracking-tight text-neutral-700 transition-opacity hover:opacity-60 sm:text-lg lg:text-xl"
        >
          ← Sherrisa Classon
        </Link>

        <h1
          className={`${oswald.className} text-5xl font-normal leading-[0.95] text-[#bed95b] sm:text-7xl lg:text-8xl`}
        >
          Photographer
        </h1>
      </section>
    </main>
  );
}
