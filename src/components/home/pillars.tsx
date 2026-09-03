import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { HoverLift } from "@/components/hover-lift";
import retreatsImage from "@/assets/images/pillars-retreats.webp";
import coachingImage from "@/assets/images/pillars-coaching.webp";
import peptidesImage from "@/assets/images/pillars-peptides.webp";

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <Reveal>
        <h2 className="text-4xl font-black tracking-tight text-foreground uppercase sm:text-5xl">
          Three ways to work with Ryan
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Retreats, coaching, or peptide research — each one starts with
          Ryan, personally.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:grid-rows-2">
        {/* Guided Retreats — one card: photo on top, gold panel below */}
        <Reveal delay={0} className="h-full sm:row-span-2">
          <HoverLift className="h-full">
            <Link
              href="/retreats"
              className="group flex h-full flex-col overflow-hidden"
            >
              <div className="relative min-h-[12rem] flex-1">
                <Image
                  src={retreatsImage}
                  alt="A retreat evening around a fire pit in the desert"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="shrink-0 bg-primary p-8 text-primary-foreground">
                <h3 className="font-heading text-2xl font-bold text-balance">
                  Guided Retreats
                </h3>
                <p className="mt-3 leading-relaxed opacity-85">
                  Multi-day, small-group retreats designed to reset your
                  mind, body, and direction — guided by Ryan, in person,
                  start to finish.
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition-transform group-hover:translate-x-1">
                  Explore Retreats
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          </HoverLift>
        </Reveal>

        {/* Personal Development & Life Coaching — photo + text combined */}
        <Reveal delay={0.1} className="h-full">
          <HoverLift className="h-full">
            <Link
              href="/coaching"
              className="group relative flex h-full min-h-[16rem] items-center overflow-hidden p-8 lg:min-h-[19rem]"
            >
              <Image
                src={coachingImage}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />

              <div className="relative max-w-[80%] text-secondary-foreground sm:max-w-[65%]">
                <h3 className="font-heading text-2xl font-bold text-balance">
                  Personal Development &amp; Life Coaching
                </h3>
                <p className="mt-3 leading-relaxed opacity-85">
                  Ongoing, one-on-one coaching with Ryan for people ready to
                  change how they think, decide, and act — real
                  accountability, built around where you are right now.
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition-transform group-hover:translate-x-1">
                  Learn About Coaching
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          </HoverLift>
        </Reveal>

        {/* Research Peptides — photo + text combined */}
        <Reveal delay={0.2} className="h-full">
          <HoverLift className="h-full">
            <Link
              href="/peptides"
              className="group relative flex h-full min-h-[13rem] items-center overflow-hidden border-2 border-primary/70 p-8 lg:min-h-[15rem]"
            >
              <Image
                src={peptidesImage}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-card/85 to-card/30" />

              <div className="relative max-w-[80%] text-foreground sm:max-w-[65%]">
                <h3 className="font-heading text-2xl font-bold text-balance">
                  Research Peptides
                </h3>
                <p className="mt-3 leading-relaxed opacity-85">
                  A research-focused connection point for peptide inquiries.
                  Research-use-only — no pricing, no dosing guidance, no
                  health claims. Contact Ryan to discuss.
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-transform group-hover:translate-x-1">
                  Learn More
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          </HoverLift>
        </Reveal>
      </div>
    </section>
  );
}
