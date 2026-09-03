import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { HoverLift } from "@/components/hover-lift";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Guided Retreats",
    description:
      "Multi-day, small-group retreats designed to reset your mind, body, and direction — guided by Ryan, in person, start to finish.",
    href: "/retreats",
    cta: "Explore Retreats",
    tone: "bg-primary text-primary-foreground",
    accent: "",
    span: "lg:row-span-2",
    minH: "min-h-[20rem] lg:min-h-[38rem]",
  },
  {
    title: "Personal Development & Life Coaching",
    description:
      "Ongoing, one-on-one coaching with Ryan for people ready to change how they think, decide, and act — real accountability, built around where you are right now.",
    href: "/coaching",
    cta: "Learn About Coaching",
    tone: "bg-secondary text-secondary-foreground",
    accent: "",
    span: "",
    minH: "min-h-[18rem]",
  },
  {
    title: "Research Peptides",
    description:
      "A research-focused connection point for peptide inquiries. Research-use-only — no pricing, no dosing guidance, no health claims. Contact Ryan to discuss.",
    href: "/peptides",
    cta: "Learn More",
    tone: "border-2 border-primary/70 bg-card text-foreground",
    accent: "text-primary",
    span: "",
    minH: "min-h-[18rem]",
  },
];

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black tracking-tight text-foreground uppercase sm:text-5xl">
            Three ways to work with Ryan
          </h2>
          <p className="mt-4 text-muted-foreground">
            Retreats, coaching, or peptide research — each one starts with
            Ryan, personally.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:grid-rows-2">
        {pillars.map((pillar, index) => (
          <Reveal
            key={pillar.href}
            delay={index * 0.1}
            className={cn("h-full", pillar.span)}
          >
            <HoverLift className="h-full">
              <Link
                href={pillar.href}
                className={cn(
                  "group flex h-full flex-col justify-end p-8",
                  pillar.minH,
                  pillar.tone
                )}
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-balance">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-relaxed opacity-85">
                    {pillar.description}
                  </p>
                  <span
                    className={cn(
                      "mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition-transform group-hover:translate-x-1",
                      pillar.accent
                    )}
                  >
                    {pillar.cta}
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
