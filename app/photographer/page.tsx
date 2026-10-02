import Image from "next/image";
import Link from "next/link";
import { oswald } from "../fonts";

export default function PhotographerPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-700">
      {/* Intro */}
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

        <p className="mt-8 max-w-3xl text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          I photograph products, spaces, and everyday moments with an emphasis
          on composition, atmosphere, and visual storytelling.
        </p>
      </section>

      {/* Areas of Practice */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="border-t border-neutral-300 pt-5">
            <h2 className="text-lg font-medium text-neutral-700">
              Product & Brand
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-500">
              Thoughtful product imagery that communicates material, detail,
              context, and personality.
            </p>
          </div>

          <div className="border-t border-neutral-300 pt-5">
            <h2 className="text-lg font-medium text-neutral-700">
              Spaces & Environment
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-500">
              Photography that captures the design, atmosphere, and character
              of a place.
            </p>
          </div>

          <div className="border-t border-neutral-300 pt-5">
            <h2 className="text-lg font-medium text-neutral-700">
              Visual Storytelling
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-500">
              Images built around observation, sequence, and the small details
              that give a story its sense of place.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex items-center gap-5 sm:mb-16 sm:gap-8">
          <div className="h-px flex-1 bg-neutral-300" />

          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-base">
            Featured Work
          </h2>

          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <Link
          href="/photographer/choisi-copenhagen"
          className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.10)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[520px] lg:min-h-[640px]">
              <Image
                src="/images/choisi/2026-09-23_Copenhagen-63.jpg"
                alt="Choisi Copenhagen photography project"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex items-center px-8 py-12 sm:px-12 lg:px-16">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  Product & Space Photography
                </p>

                <h3
                  className={`${oswald.className} mt-4 text-4xl font-normal text-[#bed95b] sm:text-5xl`}
                >
                  Choisi Copenhagen
                </h3>

                <p className="mt-6 text-lg font-light leading-relaxed text-neutral-600 sm:text-xl">
                  A Copenhagen photography project exploring product, interior
                  space, and visual identity through a small independent design
                  shop.
                </p>

                <p className="mt-8 text-base font-medium text-neutral-700">
                  View case study →
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Approach */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Approach
        </h2>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          My photography is grounded in observation. I look for relationships
          between objects, light, space, and people, then build compositions
          that communicate more than the subject alone.
        </p>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          I am especially drawn to work where photography overlaps with
          design, travel, hospitality, education, and brand storytelling.
        </p>
      </section>
    </main>
  );
}
