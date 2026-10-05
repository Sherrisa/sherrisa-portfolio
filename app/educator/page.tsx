import Image from "next/image";
import Link from "next/link";
import { oswald } from "../fonts";

export default function EducatorPage() {
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
          Educator
        </h1>

        <p className="mt-8 max-w-3xl text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          I design learning experiences that help people move from curiosity to
          understanding, and from understanding to confident action.
        </p>
      </section>

      {/* Areas of Practice */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="border-t border-neutral-300 pt-5">
            <h2 className="text-lg font-medium text-neutral-700">
              Learning Design
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-500">
              Curriculum, lesson structure, learning objectives, sequencing, and
              activities designed around what learners need to understand and
              do.
            </p>
          </div>

          <div className="border-t border-neutral-300 pt-5">
            <h2 className="text-lg font-medium text-neutral-700">
              Facilitation
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-500">
              Live instruction that invites participation, adapts to the room,
              and helps learners build confidence through guided practice.
            </p>
          </div>

          <div className="border-t border-neutral-300 pt-5">
            <h2 className="text-lg font-medium text-neutral-700">
              Digital Learning
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-500">
              Technology-supported learning experiences that combine clear
              instruction, visual communication, interaction, and practical
              application.
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
          href="/educator/digital-drawing"
          className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.10)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[440px] overflow-hidden bg-neutral-50 lg:min-h-[560px]">
              <Image
                src="/images/digital-drawing/dotscircles-web.jpg"
                alt="Student painting dots with sponges during a Digital Drawing art lesson"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex items-center px-8 py-12 sm:px-12 lg:px-16">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                  Curriculum Design & Instruction
                </p>

                <h3
                  className={`${oswald.className} mt-4 text-4xl font-normal text-[#bed95b] sm:text-5xl`}
                >
                  Digital Drawing
                </h3>

                <p className="mt-6 text-lg font-light leading-relaxed text-neutral-600 sm:text-xl">
                  A five week elementary art course that combines traditional
                  drawing and physical materials with digital tools introduced
                  when they expand what students can see, explore, and build.
                </p>

                <p className="mt-8 text-base font-medium text-neutral-700">
                  View case study →
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Teaching Approach */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Teaching Approach
        </h2>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          My teaching often follows a simple rhythm: see, explore, build. I
          begin by helping learners notice and understand what matters, create
          space to experiment without needing immediate mastery, and then move
          toward making or doing something with what they have learned.
        </p>

        <p className="mt-6 text-xl font-light leading-relaxed text-neutral-600 sm:text-2xl">
          I am most interested in learning experiences that connect ideas to
          practice. Whether I am teaching music, technology, design, or creative
          tools, I want learners to leave with greater understanding and a
          stronger sense that they can continue without me.
        </p>
      </section>

      {/* Experience */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex items-center gap-5 sm:mb-16 sm:gap-8">
          <div className="h-px flex-1 bg-neutral-300" />

          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-base">
            Selected Experience
          </h2>

          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium text-neutral-700">
              Classroom Education
            </h3>

            <p className="mt-3 text-lg font-light leading-relaxed text-neutral-600">
              More than two decades of teaching experience across music,
              technology, and creative disciplines, including curriculum
              development, classroom instruction, and student-centered learning.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-neutral-700">
              Technology & Facilitation
            </h3>

            <p className="mt-3 text-lg font-light leading-relaxed text-neutral-600">
              Experience facilitating technology learning, supporting learners
              through unfamiliar tools, and translating technical concepts into
              approachable steps and practical outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-neutral-700">
              Creative Curriculum
            </h3>

            <p className="mt-3 text-lg font-light leading-relaxed text-neutral-600">
              Current work includes designing creative technology and digital
              art learning experiences for children, with an emphasis on
              observation, experimentation, and making.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-neutral-700">
              E-Learning & Instructional Design
            </h3>

            <p className="mt-3 text-lg font-light leading-relaxed text-neutral-600">
              Expanding formal practice in instructional design and e-learning,
              with a focus on connecting sound learning strategy to clear,
              engaging digital experiences.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
