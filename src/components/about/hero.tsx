import Image from "next/image";
import { Reveal } from "@/components/reveal";
import aboutHeroImage from "@/assets/images/about-hero-overlook.webp";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[26rem] items-center overflow-hidden border-b border-border/70 sm:min-h-[30rem] lg:min-h-[34rem]">
      <div className="absolute inset-0">
        <Image
          src={aboutHeroImage}
          alt="Ryan taking in the view from a ridge at sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/15" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Reveal immediate delay={0}>
          <span className="inline-block border border-primary bg-background/60 px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-primary uppercase">
            About Ryan
          </span>
        </Reveal>

        <Reveal immediate delay={0.1}>
          <h1 className="mt-6 max-w-xl text-5xl leading-[0.95] font-black tracking-tight uppercase sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">Built by experience.</span>
            <span className="block text-primary">Not a brand team.</span>
          </h1>
        </Reveal>

        <Reveal immediate delay={0.2}>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Attack Life is one person&apos;s practice, built for people who
            are serious about changing. Here&apos;s the story behind it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
