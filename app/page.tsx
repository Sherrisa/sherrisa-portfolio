import Image from "next/image";
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
    </main>
  );
}