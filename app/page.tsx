import Image from "next/image";
import Link from "next/link";
import { oswald } from "./fonts";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-700">
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

      {/* Latest Work */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        {/* Section heading */}
        <div className="mb-12 flex items-center gap-5 sm:mb-16 sm:gap-8">
          <div className="h-px flex-1 bg-neutral-300" />

          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-base">
            Some of My Latest Work
          </h2>

          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Educator */}
          <Link
            href="/educator/digital-drawing"
            className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.10)] transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="aspect-square bg-neutral-100 p-6">
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-white">
                <Image
                  src="/images/digital-drawing/dotscircles-square.JPG"
                  alt="Student painting dots with sponge brushes during Digital Drawing class"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="px-6 py-6">
              <h3 className="text-2xl font-normal text-neutral-700">
                Digital Drawing
              </h3>

              <p className="mt-1 text-lg text-neutral-500">
                Curriculum Design & Instruction
              </p>
            </div>
          </Link>

          {/* Designer */}
          <Link
            href="/designer/coddiwomple-art"
            className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.10)] transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="aspect-square bg-neutral-100 p-6">
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-white">
                <Image
                  src="/images/coddiwomple/scooter.png"
                  alt="Coddiwomple Art scooter illustration"
                  fill
                  className="object-contain p-3"
                />
              </div>
            </div>

            <div className="px-6 py-6">
              <h3 className="text-2xl font-normal text-neutral-700">
                Coddiwomple Art
              </h3>

              <p className="mt-1 text-lg text-neutral-500">Branding & UX</p>
            </div>
          </Link>

          {/* Photographer */}
          <Link
            href="/photographer/choisi-copenhagen"
            className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.10)] transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="aspect-square bg-neutral-100 p-6">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/choisi/2026-09-23_Copenhagen-63.jpg"
                  alt="Choisi Copenhagen photography project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="px-6 py-6">
              <h3 className="text-2xl font-normal text-neutral-700">
                Choisi Copenhagen
              </h3>

              <p className="mt-1 text-lg text-neutral-500">Photography</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Positioning */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
        <p className="text-2xl font-light leading-relaxed text-neutral-600 sm:text-3xl">
          I design learning experiences, visual identities, and photographic
          stories that help people understand, connect, and create.
        </p>
      </section>
    </main>
  );
}
