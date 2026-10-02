import Image from "next/image";
import Link from "next/link";
import { museoModerno, oswald } from "../../fonts";

export default function CoddiwompleArtPage() {
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
          Design
        </p>

        <h1
          className={`${oswald.className} text-5xl font-normal leading-[0.95] text-[#bed95b] sm:text-7xl lg:text-8xl`}
        >
          Coddiwomple Art
        </h1>

        <p className="mt-6 text-lg text-neutral-500 sm:text-xl">
          Branding, UX Design & Front-End Development
        </p>
      </section>

      {/* Hero placeholder */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="aspect-[16/9] rounded-2xl bg-neutral-100" />
      </section>

      {/* About the Project */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          About the Project
        </h2>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          Coddiwomple Art is an education brand built around creative learning
          experiences for children. I developed the visual identity, website,
          user experience, and front-end implementation while shaping the brand
          around a sense of curiosity, movement, play, and purposeful
          exploration.
        </p>
      </section>

      {/* My Role */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          My Role
        </h2>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          I led the project from concept through implementation, including brand
          direction, color palette, typography, logo and mascot development,
          information architecture, responsive interface design, enrollment
          flow, and the Next.js front-end build.
        </p>
      </section>

      {/* Brand System */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex items-center gap-5 sm:mb-16 sm:gap-8">
          <div className="h-px flex-1 bg-neutral-300" />

          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-base">
            Brand System
          </h2>

          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        {/* Color Palette */}
        <div className="mx-auto max-w-5xl">
          <h3 className="text-2xl font-normal text-neutral-700">
            Color Palette
          </h3>

          <p className="mt-4 max-w-3xl text-lg font-light leading-relaxed text-neutral-600 sm:text-xl">
            The palette combines bright cyan and berry tones with a deep
            near-black anchor, giving the brand enough energy for children while
            keeping the overall system clean and contemporary.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl bg-neutral-50">
            <Image
              src="/images/coddiwomple/coddiwomple-palette-cropped.jpeg"
              alt="Coddiwomple Art color palette"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Typography */}
        <div className="mx-auto mt-20 max-w-5xl">
          <h3 className="text-2xl font-normal text-neutral-700">Typography</h3>

          <div className="mt-8 overflow-hidden rounded-2xl bg-neutral-50 px-8 py-10 sm:px-12 sm:py-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  Display Typeface
                </p>

                <p
                  className={`${museoModerno.className} mt-4 text-4xl font-normal text-neutral-800 sm:text-5xl lg:text-6xl`}
                >
                  MuseoModerno
                </p>

                <p
                  className={`${museoModerno.className} mt-8 text-3xl font-normal leading-tight text-neutral-700 sm:text-4xl lg:text-5xl`}
                >
                  Aa Bb Cc
                </p>

                <p
                  className={`${museoModerno.className} mt-3 text-2xl font-normal text-neutral-500 sm:text-3xl`}
                >
                  1234567890
                </p>
              </div>

              <div className="border-t border-neutral-200 pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  Brand Use
                </p>

                <p className="mt-4 text-lg font-light leading-relaxed text-neutral-600 sm:text-xl">
                  MuseoModerno provides the geometric foundation for the
                  Coddiwomple Art visual identity. The custom wordmark builds on
                  those forms with modified letterforms, including an inverted
                  “m” used to create the “w.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wordmark */}
<div className="mx-auto mt-20 max-w-5xl">
  <h3 className="text-2xl font-normal text-neutral-700">
    Wordmark
  </h3>

  <Image
    src="/images/coddiwomple/coddiwomple-wordmark.png"
    alt="Coddiwomple Art wordmark"
    width={1600}
    height={700}
    className="h-auto w-full object-contain"
  />
</div>

        {/* Scooter Mascot */}
        <div className="mx-auto mt-20 max-w-5xl">
          <h3 className="text-2xl font-normal text-neutral-700">
            Scooter Mascot
          </h3>

          <div className="mt-8 flex justify-center">
            <Image
              src="/images/coddiwomple/scooter.png"
              alt="Coddiwomple Art scooter mascot"
              width={800}
              height={800}
              className="h-auto w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>
      {/* Print & Promotional Assets */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex items-center gap-5 sm:mb-16 sm:gap-8">
          <div className="h-px flex-1 bg-neutral-300" />

          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-base">
            Print & Promotional Assets
          </h2>

          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
            I extended the Coddiwomple Art identity beyond the website into
            print and promotional materials. These pieces needed to feel
            consistent with the digital brand while also working clearly and
            effectively in physical spaces.
          </p>

          <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
            QR-based materials connected print pieces directly to the online
            experience, creating a simple path from in-person promotion to
            course information and enrollment.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-neutral-50">
            <Image
              src="/images/coddiwomple/qr-card-front.png"
              alt="Front of Coddiwomple Art QR promotional card"
              width={1000}
              height={1000}
              className="h-auto w-full"
            />
          </div>

          <div className="overflow-hidden rounded-2xl bg-neutral-50">
            <Image
              src="/images/coddiwomple/qr-card-back.png"
              alt="Back of Coddiwomple Art QR promotional card"
              width={1000}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
      {/* Website & UX */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex items-center gap-5 sm:mb-16 sm:gap-8">
          <div className="h-px flex-1 bg-neutral-300" />

          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-base">
            Website & UX
          </h2>

          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
            The website was designed to keep the experience simple for parents:
            understand the course, see what children will learn, and move
            naturally toward enrollment. The interface stays intentionally clean
            so the artwork, class information, and calls to action remain easy
            to find.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="aspect-[4/3] rounded-2xl bg-neutral-100" />
          <div className="aspect-[4/3] rounded-2xl bg-neutral-100" />
        </div>

        <div className="mx-auto mt-8 max-w-5xl">
          <div className="aspect-[16/9] rounded-2xl bg-neutral-100" />
        </div>
      </section>

      {/* Reflection */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Reflection
        </h2>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          Building Coddiwomple Art required balancing personality with
          usability. The brand needed to feel playful enough for a children’s
          creative program while still feeling trustworthy and clear for the
          adults making enrollment decisions.
        </p>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          The project also gave me the opportunity to move fluidly between
          strategy, visual design, UX, content structure, and front-end
          implementation rather than treating those disciplines as isolated
          steps.
        </p>
      </section>
    </main>
  );
}
