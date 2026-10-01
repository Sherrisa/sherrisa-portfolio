import Image from "next/image";
import Link from "next/link";
import { oswald } from "../../fonts";

export default function ChoisiCopenhagenPage() {
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

        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-400 sm:text-base">
          Photography
        </p>

        <h1
          className={`${oswald.className} text-5xl font-normal leading-[0.95] text-[#bed95b] sm:text-7xl lg:text-8xl`}
        >
          Choisi Copenhagen
        </h1>

        <p className="mt-6 text-lg text-neutral-500 sm:text-xl">
          Product & Space Photography · Copenhagen, Denmark
        </p>
      </section>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mx-auto w-full max-w-2xl">
          <Image
            src="/images/choisi/2026-09-23_Copenhagen-63.jpg"
            alt="Choisi Copenhagen product and space photography"
            width={1920}
            height={2400}
            priority
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* About */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          About the Project
        </h2>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          While visiting Copenhagen, I photographed Choisi, a beautifully
          curated shop filled with ceramics, objects, texture, and warm
          natural light. The goal was to capture both the products and the
          feeling of the space.
        </p>
      </section>

      {/* Approach */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Approach
        </h2>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          I focused on composition, available light, material detail, and the
          relationship between individual objects and the environment around
          them. I wanted the images to feel quiet, tactile, and grounded in
          the visual character of the shop.
        </p>
      </section>

      {/* Selected Work */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex items-center gap-5 sm:mb-16 sm:gap-8">
          <div className="h-px flex-1 bg-neutral-300" />

          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-base">
            Selected Work
          </h2>

          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <div className="space-y-10 sm:space-y-12">
          {/* Pair 1 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Image
              src="/images/choisi/2026-09-23_Copenhagen-64.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />

            <Image
              src="/images/choisi/2026-09-23_Copenhagen-70.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />
          </div>

          {/* Pair 2 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Image
              src="/images/choisi/2026-09-23_Copenhagen-77.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />

            <Image
              src="/images/choisi/2026-09-23_Copenhagen-80.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />
          </div>

          {/* Solo feature */}
          <div className="mx-auto w-full max-w-2xl">
            <Image
              src="/images/choisi/2026-09-23_Copenhagen-86.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />
          </div>

          {/* Pair 3 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Image
              src="/images/choisi/2026-09-23_Copenhagen-89.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />

            <Image
              src="/images/choisi/2026-09-23_Copenhagen-90.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />
          </div>

          {/* Pair 4 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Image
              src="/images/choisi/2026-09-23_Copenhagen-93.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />

            <Image
              src="/images/choisi/2026-09-23_Copenhagen-96.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />
          </div>

          {/* Closing pair */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Image
              src="/images/choisi/2026-09-23_Copenhagen-102.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />

            <Image
              src="/images/choisi/2026-09-23_Copenhagen-104.jpg"
              alt="Choisi Copenhagen"
              width={1920}
              height={2400}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Reflection
        </h2>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          This shoot reminded me how much I enjoy photographing environments
          where product, space, design, and story overlap. The strongest
          images came from slowing down and paying attention to relationships
          between light, form, texture, and placement.
        </p>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          One thing I would approach differently next time is orientation
          coverage. I photographed the session entirely in portrait, even
          though both portrait and landscape assets would have been useful.
          It reinforced the importance of building deliverable variety into
          the shot list before the shoot begins.
        </p>
      </section>
    </main>
  );
}