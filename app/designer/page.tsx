import Image from "next/image";
import Link from "next/link";
import { oswald } from "../fonts";

export default function DesignerPage() {
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
          Designer
        </h1>

        <p className="mt-8 max-w-3xl text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          I design visual identities, digital experiences, and communication
          systems that make ideas easier to understand, use, and remember.
        </p>
      </section>

      {/* Areas of Practice */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="border-t border-neutral-300 pt-5">
            <h2 className="text-lg font-medium text-neutral-700">
              Brand Identity
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-500">
              Visual systems that bring together color, typography, imagery,
              logos, and supporting brand assets.
            </p>
          </div>

          <div className="border-t border-neutral-300 pt-5">
            <h2 className="text-lg font-medium text-neutral-700">
              UX & Web Design
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-500">
              Clear, responsive interfaces that help people find information,
              understand choices, and move naturally through an experience.
            </p>
          </div>

          <div className="border-t border-neutral-300 pt-5">
            <h2 className="text-lg font-medium text-neutral-700">
              Visual Communication
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-500">
              Print and digital materials designed to communicate consistently
              across different formats and touchpoints.
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
          href="/designer/coddiwomple-art"
          className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.10)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex min-h-[440px] items-center justify-center bg-neutral-50 p-10 sm:p-14 lg:min-h-[560px] lg:p-16">
              <Image
                src="/images/coddiwomple/coddiwomple-wordmark.png"
                alt="Coddiwomple Art wordmark"
                width={1200}
                height={500}
                className="h-auto w-full max-w-xl object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex items-center px-8 py-12 sm:px-12 lg:px-16">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  Branding, UX & Front-End Development
                </p>

                <h3
                  className={`${oswald.className} mt-4 text-4xl font-normal text-[#bed95b] sm:text-5xl`}
                >
                  Coddiwomple Art
                </h3>

                <p className="mt-6 text-lg font-light leading-relaxed text-neutral-600 sm:text-xl">
                  A children&apos;s creative education brand developed from
                  concept through visual identity, print materials, responsive
                  website design, enrollment flow, and front-end implementation.
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
          I tend to begin with the question of what someone needs to understand
          or do, then build the visual system around that goal. I care about
          aesthetics, but I am most interested in design that earns its place by
          making communication clearer.
        </p>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          My work often crosses boundaries between brand design, UX, content,
          print, and front-end implementation, which allows me to think about
          the full experience rather than a single isolated deliverable.
        </p>
      </section>
    </main>
  );
}
