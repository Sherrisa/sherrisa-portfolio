import Image from "next/image";
import Link from "next/link";
import { oswald } from "../../fonts";

const weeks = [
  {
    week: "01",
    title: "Look Again",
    question: "Can I draw something I don't think I know how to draw?",
    description:
      "Students begin with an upside down seahorse drawing that interrupts the brain's tendency to rely on a stored image. Instead, they follow the actual lines, curves, angles, and changes in direction. A simple ocean scene in Fresco adds an engaging first digital experience.",
  },
  {
    week: "02",
    title: "Travel the Edge",
    question: "What does the edge actually do?",
    description:
      "Students explore contour through blind contour drawing and contour drawing while looking. My cello and vases of fresh flowers give them real subjects filled with curves, irregular edges, overlaps, and changes in direction.",
  },
  {
    week: "03",
    title: "What's in Front?",
    question: "What is in front of what?",
    description:
      "Students investigate overlap by drawing the object in front first and adding only the visible parts of objects behind it. Physical Dots cards make front and back relationships tangible before the same idea is connected to layers in Fresco.",
  },
  {
    week: "04",
    title: "Measure What You See",
    question: "How does this part relate to that part?",
    description:
      "Students discover that artists do not have to rely on guessing. Sighting gives them tools for comparing length, width, angle, alignment, proportion, and negative space while drawing from observation.",
  },
  {
    week: "05",
    title: "Chase the Light",
    question: "How does light turn shape into form?",
    description:
      "Students learn to notice highlights, middle values, shadows, and changes in value. They explore how light creates dimensional form and discover that an edge does not always need to be drawn as a line.",
  },
];

export default function DigitalDrawingPage() {
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
          Learning Design
        </p>

        <h1
          className={`${oswald.className} text-5xl font-normal leading-[0.95] text-[#bed95b] sm:text-7xl lg:text-8xl`}
        >
          Digital Drawing
        </h1>

        <p className="mt-6 text-lg text-neutral-500 sm:text-xl">
          Curriculum Design & Instruction · Elementary Art + Technology
        </p>
      </section>

      {/* Hero Image */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
          {/* Replace this placeholder with your classroom image after Wednesday */}
          <div className="flex h-full items-center justify-center">
            <div className="max-w-md px-8 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                Hero Image
              </p>
              <p className="mt-3 text-lg text-neutral-500">
                Classroom setup with cello, flowers, paper, markers, paint,
                iPads, and Apple Pencils
              </p>
            </div>
          </div>

          <Image
            src="/images/digital-drawing/dotscircles-web.jpg"
            alt="Girl painting colorful dots with sponges and paint during Digital Drawing class"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </section>

      {/* Project */}
      <section className="mx-auto w-full max-w-5xl border-t border-neutral-200 px-6 py-20">
        <SectionLabel text="The Project" />

        <h2 className="max-w-4xl text-3xl font-medium leading-tight text-neutral-800 md:text-5xl">
          I am not designing a software class. I am designing a class where
          children learn to see, explore, and build.
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
            <p>
              Digital Drawing is a five week art course that begins with{" "}
              <strong className="font-medium text-neutral-800">
                real materials, real subjects, and real drawing skills
              </strong>
              . Students work with paper, markers, paint, flowers, shells, and
              other physical materials as they learn to look closely and make
              intentional choices.
            </p>

            <p>
              <strong className="font-medium text-neutral-800">
                Digital tools are added when they create a new possibility.
              </strong>{" "}
              Adobe Fresco lets students experiment with layers, color, texture,
              scale, and composition in ways that extend the traditional art
              experience rather than replace it.
            </p>
          </div>

          <div className="grid gap-6">
            <ProjectDetail label="Learners" value="Elementary students" />
            <ProjectDetail
              label="Format"
              value="Five week after school course"
            />
            <ProjectDetail label="Class size" value="Up to 16 students" />
            <ProjectDetail
              label="Media"
              value="Drawing, paint, markers + Adobe Fresco"
            />
          </div>
        </div>
      </section>

      {/* Coddiwomple Philosophy */}
      <section className="bg-neutral-50">
        <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 py-24 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <SectionLabel text="The Coddiwomple Philosophy" />

            <p
              className={`${oswald.className} text-4xl font-normal leading-tight text-[#bed95b] sm:text-5xl md:text-6xl`}
            >
              Travel purposefully toward an unknown destination.
            </p>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
            <p>
              A child does not need to know exactly what the finished artwork
              will become before beginning. The creative process can unfold one
              purposeful decision at a time.
            </p>

            <p>
              Look closely. Try something. Notice what happens. Decide what
              comes next. Drawing becomes less about already knowing how and
              more about learning how to{" "}
              <strong className="font-medium text-neutral-800">
                find the next place to go.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Design Problem */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <SectionLabel text="The Design Problem" />

        <h2 className="max-w-4xl text-3xl font-medium leading-tight text-neutral-800 md:text-5xl">
          How do I keep the art bigger than the technology?
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
            <p>
              Drawing can feel overwhelming when the problem is{" "}
              <strong className="font-medium text-neutral-800">
                “Draw a cello.”
              </strong>{" "}
              I make the problem smaller: Where does the line begin? What is it
              doing? Where does it change direction? What should I notice next?
            </p>

            <p>
              I model that thinking aloud so students learn a process they can
              carry into an unfamiliar subject rather than waiting for someone
              to show them exactly what to draw.
            </p>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
            <p>
              The same principle guides the technology. Students are introduced
              to Fresco tools only when a tool opens a new creative possibility
              or helps them solve the next visual problem.
            </p>

            <p>
              The goal is to give students enough skill and confidence to{" "}
              <strong className="font-medium text-neutral-800">
                travel purposefully through the creative process
              </strong>
              , even when they do not yet know where it will lead.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Cycle */}
      <section className="bg-neutral-50">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <SectionLabel text="The Creative Cycle" />

          <h2 className="max-w-4xl text-3xl font-medium leading-tight text-neutral-800 md:text-5xl">
            See. Explore. Build.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600">
            The cycle gives students a way to move forward when they do not
            already know the answer. First notice what is there. Then
            investigate what could happen. Finally, make a purposeful choice
            about what to build next.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <FrameworkItem
              number="01"
              title="See"
              text="Look closely before deciding what something is supposed to look like. Notice lines, curves, angles, spaces, proportions, overlaps, values, and relationships."
            />

            <FrameworkItem
              number="02"
              title="Explore"
              text="Ask, “What happens if...?” Move it. Recolor it. Hide it. Make it larger. Change the brush. Try another mark. Exploration turns the tool into a place for curiosity."
            />

            <FrameworkItem
              number="03"
              title="Build"
              text="Choose what stays, what changes, and what comes next. Students build from what they discovered rather than following a predetermined destination."
            />
          </div>
        </div>
      </section>

      {/* Physical + Digital */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <SectionLabel text="Two Ways of Learning" />

        <h2 className="max-w-4xl text-3xl font-medium leading-tight text-neutral-800 md:text-5xl">
          Paper asks, “What is actually here?” Digital asks, “What happens if?”
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <BuildItem
            title="Physical materials slow the looking down."
            text="Paper, markers, paint, real objects, and repeated drawings give students time to notice relationships. Attention shifts toward observation, movement, and decision making."
          />

          <BuildItem
            title="Digital tools make experimentation easier."
            text="Layers, transform, opacity, brushes, color, and imported images let students test possibilities quickly. Changing direction becomes fast, reversible, and playful."
          />
        </div>
      </section>

      {/*
      Supporting Image
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
          <div className="flex h-full items-center justify-center">
            <div className="max-w-md px-8 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                Supporting Image
              </p>
              <p className="mt-3 text-lg text-neutral-500">
                Cello, flowers, paper drawings, or physical materials beside the
                iPad
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Five Weeks */}
      <section className="bg-neutral-50">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <SectionLabel text="The Learning Journey" />

          <h2 className="max-w-4xl text-3xl font-medium leading-tight text-neutral-800 md:text-5xl">
            Five weeks. Five new ways to look.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600">
            Each week gives students another tool for moving through an unknown
            drawing problem. The sequence begins with the confidence to start
            and gradually asks students to notice more complex relationships.
          </p>

          <div className="mt-16 divide-y divide-neutral-200 border-y border-neutral-200">
            {weeks.map((week) => (
              <div
                key={week.week}
                className="grid gap-5 py-10 md:grid-cols-[120px_1fr]"
              >
                <p
                  className={`${oswald.className} text-4xl leading-none text-[#bed95b] md:text-5xl`}
                >
                  {week.week}
                </p>

                <div>
                  <h3 className="text-2xl font-medium text-neutral-800 md:text-3xl">
                    {week.title}
                  </h3>

                  <p className="mt-3 text-lg font-medium text-neutral-700">
                    {week.question}
                  </p>

                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-600">
                    {week.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Week One */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <SectionLabel text="Designing the First Experience" />

        <h2 className="max-w-4xl text-3xl font-medium leading-tight text-neutral-800 md:text-5xl">
          The first destination is confidence.
        </h2>

        {/*
        <div className="mt-12 aspect-[16/9] overflow-hidden bg-neutral-100">
          <div className="flex h-full items-center justify-center">
            <div className="max-w-md px-8 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                Week One Image
              </p>
              <p className="mt-3 text-lg text-neutral-500">
                Upside down seahorse drawing, student hands, or reveal moment
              </p>
            </div>
          </div>
        </div>
        */}

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
            <p>
              The first class needs to deliver an immediate experience of{" "}
              <strong className="font-medium text-neutral-800">
                “I can do this.”
              </strong>
            </p>

            <p>
              Students draw a seahorse while the reference is upside down,
              shifting attention away from the idea of a seahorse and toward the
              actual journey of the line.
            </p>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
            <p>
              The drawing stays upside down until the end. Rotating it becomes
              the reveal. The student has arrived somewhere they may not have
              believed they could reach.
            </p>

            <p>
              Fresco stays intentionally simple so technology adds delight
              without taking over the experience.
            </p>
          </div>
        </div>
      </section>

      {/* Classroom UX */}
      <section className="bg-neutral-50">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <SectionLabel text="Classroom UX" />

          <h2 className="max-w-4xl text-3xl font-medium leading-tight text-neutral-800 md:text-5xl">
            Designing for sixteen students changes the technology.
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
              <p>
                The largest classroom risk is not behavior. It is sixteen
                students needing help with layers, gestures, navigation, fills,
                or disappearing artwork at the same time.
              </p>

              <p>
                That constraint pushed the course toward{" "}
                <strong className="font-medium text-neutral-800">
                  more physical art and less software complexity.
                </strong>
              </p>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-neutral-600">
              <p>
                Each physical activity needs to stand on its own as a meaningful
                art experience. The iPad then extends the idea instead of
                carrying the entire lesson.
              </p>

              <p>
                New digital tools are introduced one or two at a time so
                students can become increasingly independent as the course
                travels forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Iteration */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <SectionLabel text="Test. Notice. Change Course." />

        <h2 className="max-w-4xl text-3xl font-medium leading-tight text-neutral-800 md:text-5xl">
          The curriculum is allowed to change direction too.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600">
          Lessons are rehearsed, timed, and tested before they reach the full
          classroom. I am looking for the same things I ask students to notice:
          What worked? Where did the experience get stuck? What surprised me?
          What should change next?
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <IterationStep number="01" title="Try the experience" />
          <IterationStep number="02" title="Notice what happens" />
          <IterationStep number="03" title="Choose what changes" />
        </div>
      </section>

      {/*
      Documentation
      <section className="bg-neutral-50">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <SectionLabel text="Learning in Public" />

          <h2 className="max-w-4xl text-3xl font-medium leading-tight text-neutral-800 md:text-5xl">
            The course becomes content because the learning itself is worth
            sharing.
          </h2>

          <div className="mt-12 grid gap-14 md:grid-cols-2 md:items-start">
            <div>
              <AssetPlaceholder
                title="Drawing Exercise Reel"
                description="9:16 · Upside Down Drawing"
                ratio="aspect-[9/16]"
                portrait
              />

              <h3 className="mt-6 text-2xl font-medium text-neutral-800">
                Try the drawing experiment.
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Short drawing activities invite families into the same
                discoveries students make in class. The upside down drawing
                becomes a small public experiment in seeing rather than a
                demonstration of a perfect result.
              </p>
            </div>

            <div>
              <AssetPlaceholder
                title="Friday Fresco"
                description="9:16 · One digital tool, one creative possibility"
                ratio="aspect-[9/16]"
                portrait
              />

              <h3 className="mt-6 text-2xl font-medium text-neutral-800">
                What happens if?
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Friday Fresco isolates one tool and connects it to a creative
                question. A splatter brush can become ocean texture, atmosphere,
                stars, mountains, or something nobody planned at the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Evidence */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <SectionLabel text="What I Am Watching" />

        <h2 className="max-w-4xl text-3xl font-medium leading-tight text-neutral-800 md:text-5xl">
          Success is more than a finished picture.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <BuildItem
            title="Can they begin?"
            text="Students approach an unfamiliar subject with a way to start rather than immediately deciding they cannot draw it."
          />

          <BuildItem
            title="Can they notice?"
            text="Students describe relationships, edges, overlaps, proportions, light, and change without immediately judging the drawing."
          />

          <BuildItem
            title="Can they choose?"
            text="Students use physical and digital tools with increasing independence and make purposeful decisions about where the work goes next."
          />
        </div>
      </section>

      {/* Closing */}
      <section className="bg-neutral-50">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p
            className={`${oswald.className} max-w-4xl text-4xl font-normal leading-tight text-[#bed95b] sm:text-5xl md:text-6xl`}
          >
            You do not have to know where the drawing will end to make the next
            purposeful decision.
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
            That is the heart of Digital Drawing and the heart of Coddiwomple:
            look closely, stay curious, keep moving, and build from what you
            discover along the way.
          </p>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="mb-6 text-sm uppercase tracking-[0.2em] text-neutral-400 sm:text-base">
      {text}
    </p>
  );
}

function ProjectDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-neutral-200 pt-4">
      <p className="text-sm uppercase tracking-[0.16em] text-neutral-400">
        {label}
      </p>
      <p className="mt-2 text-lg text-neutral-700">{value}</p>
    </div>
  );
}

function FrameworkItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-neutral-200 pt-6">
      <p className={`${oswald.className} text-5xl leading-none text-[#bed95b]`}>
        {number}
      </p>

      <h3 className="mt-5 text-2xl font-medium text-neutral-800">{title}</h3>

      <p className="mt-4 text-lg leading-relaxed text-neutral-600">{text}</p>
    </div>
  );
}

function BuildItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-t border-neutral-200 pt-6">
      <h3 className="text-xl font-medium text-neutral-800">{title}</h3>
      <p className="mt-4 text-lg leading-relaxed text-neutral-600">{text}</p>
    </div>
  );
}

function IterationStep({ number, title }: { number: string; title: string }) {
  return (
    <div className="border-t border-neutral-200 pt-6">
      <p className={`${oswald.className} text-4xl leading-none text-[#bed95b]`}>
        {number}
      </p>
      <p className="mt-4 text-xl font-medium text-neutral-800">{title}</p>
    </div>
  );
}

function AssetPlaceholder({
  title,
  description,
  ratio,
  portrait = false,
}: {
  title: string;
  description: string;
  ratio: string;
  portrait?: boolean;
}) {
  return (
    <div className={portrait ? "max-w-[320px]" : "w-full"}>
      <div
        className={`${ratio} flex items-center justify-center bg-neutral-100 p-8`}
      >
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.16em] text-neutral-400">
            Visual Placeholder
          </p>
          <p className="mt-3 text-lg font-medium text-neutral-700">{title}</p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
