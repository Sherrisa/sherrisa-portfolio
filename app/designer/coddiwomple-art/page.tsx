import Image from "next/image";
import Link from "next/link";
import { jost, museoModerno, oswald } from "../../fonts";

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

      {/* Hero — Purposeful Journey */}
<section className="mx-auto w-full max-w-6xl px-6 pb-16">
  <div className="relative min-h-[430px] overflow-hidden rounded-3xl bg-neutral-50 sm:min-h-[480px] lg:min-h-[520px]">
    {/* Dotted journey path */}
    <svg
      viewBox="0 0 1200 520"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <path
        d="M 70 195
           C 220 245, 270 330, 445 335
           C 610 340, 675 420, 790 425
           C 925 430, 1000 320, 1110 255"
        fill="none"
        stroke="#80DEEA"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="1 18"
      />
    </svg>

    {/* Definition */}
    <div className="relative z-10 mx-auto flex min-h-[430px] max-w-5xl items-center px-8 pb-28 pt-16 sm:min-h-[480px] sm:px-12 lg:min-h-[520px] lg:px-16">
      <div className="w-full">
        <div className="mb-6 ml-10 text-left sm:mb-8 sm:ml-16 lg:ml-24">
          <p
            className={`${jost.className} text-sm font-bold uppercase tracking-[0.14em] text-[#021214] sm:text-base`}
          >
            Coddiwomple
          </p>

          <p
            className={`${jost.className} mt-2 text-lg text-[#021214] sm:text-xl`}
            style={{ fontStyle: "italic" }}
          >
            verb
          </p>
        </div>

        <h2
          className={`${jost.className} max-w-4xl text-left text-3xl font-bold leading-[1.08] text-[#021214] sm:text-4xl lg:text-5xl`}
        >
          To travel purposefully toward an unknown destination.
        </h2>
      </div>
    </div>

    {/* Scooter */}
    <Image
      src="/images/coddiwomple/scooter.png"
      alt="Coddiwomple Art scooter mascot"
      width={800}
      height={800}
      className="absolute bottom-3 right-[10%] z-20 h-auto w-36 object-contain sm:w-44 lg:bottom-5 lg:right-[12%] lg:w-56"
    />
  </div>
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
              src="/images/coddiwomple/coddiwomple-palette.jpeg"
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
          <h3 className="text-2xl font-normal text-neutral-700">Wordmark</h3>

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
        {/* Section heading */}
        <div className="mb-12 flex items-center gap-5 sm:mb-16 sm:gap-8">
          <div className="h-px flex-1 bg-neutral-300" />

          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-base">
            Website & UX
          </h2>

          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        {/* UX story */}
        <div className="mx-auto max-w-4xl">
          <p className="text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
            One of the clearest UX decisions came from the course
            call-to-action. I started with a conventional button, but it felt
            too much like a generic software interface for a brand built around
            creativity, exploration, and discovery.
          </p>

          <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
            I replaced the button with a stronger berry-colored text link and
            used motion as the visual cue instead. The interaction evolved into
            a wandering dot following a curved path beneath “Explore the courses
            →,” creating a more distinctive invitation to move deeper into the
            site.
          </p>
        </div>

        {/* Live interaction example */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-white px-6 py-14 shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:min-h-[360px] sm:px-10">
            <div className="w-full max-w-2xl">
              {/* CTA */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <p
                  className={`${jost.className} text-2xl font-bold text-[#A2337E] sm:text-3xl lg:text-4xl`}
                >
                  Explore the courses
                </p>

                <span
                  className={`${jost.className} text-2xl font-normal text-[#A2337E] sm:text-3xl lg:text-4xl`}
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              {/* Animated journey */}
              <div className="mx-auto mt-5 w-full max-w-md sm:mt-7">
                <svg
                  viewBox="0 0 500 105"
                  className="h-auto w-full overflow-visible"
                  role="img"
                  aria-label="Animated berry-colored dot moving along a curved path beneath the course link"
                >
                  {/* Invisible motion path */}
                  <path
                    id="course-dot-path"
                    d="M 80 32
                 C 135 32, 155 73, 215 73
                 C 285 73, 305 40, 365 40
                 C 395 40, 415 54, 430 61"
                    fill="none"
                    stroke="none"
                  />

                  {/* Animated berry dot */}
                  <circle r="11" fill="#A2337E">
                    <animateMotion
                      dur="5s"
                      repeatCount="indefinite"
                      keyPoints="0;1;0"
                      keyTimes="0;0.5;1"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
                    >
                      <mpath href="#course-dot-path" />
                    </animateMotion>
                  </circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Feature caption */}
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            The final interaction uses restrained motion to attract attention
            without overpowering the content, reinforcing the brand’s idea of
            purposeful exploration.
          </p>
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
