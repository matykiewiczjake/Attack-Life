import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { HoverLift } from "@/components/hover-lift";
import { cn } from "@/lib/utils";

const pillars = [
  {
    number: "01",
    title: "Guided Retreats",
    description:
      "Step away from the noise. Multi-day, small-group retreats designed to reset your mind, body, and direction — guided by Ryan, in person, start to finish.",
    href: "/retreats",
    cta: "Explore Retreats",
    tone: "bg-primary text-primary-foreground",
    accent: "",
    offset: "",
  },
  {
    number: "02",
    title: "Personal Development & Life Coaching",
    description:
      "Ongoing, one-on-one work for people ready to change how they think, decide, and act. Not a course you finish — a coach who stays in it with you.",
    href: "/coaching",
    cta: "Learn About Coaching",
    tone: "bg-secondary text-secondary-foreground",
    accent: "",
    offset: "lg:mt-14",
  },
  {
    number: "03",
    title: "Research Peptides",
    description:
      "A research-focused connection point for peptide inquiries. Research-use-only — no pricing, no dosing guidance, no health claims. Contact Ryan to discuss.",
    href: "/peptides",
    cta: "Learn More",
    tone: "border-2 border-primary/70 bg-card text-foreground",
    accent: "text-primary",
    offset: "",
  },
];

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-md text-4xl font-black tracking-tight text-foreground uppercase sm:text-5xl">
            Three ways to work with Ryan
          </h2>
          <p className="max-w-sm text-muted-foreground sm:text-right">
            Every offering below leads to the same place: a direct
            conversation, not a checkout page.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.href} delay={index * 0.1} className={pillar.offset}>
            <HoverLift className="h-full">
              <Link
                href={pillar.href}
                className={cn(
                  "group flex h-full min-h-[26rem] flex-col justify-between p-8",
                  pillar.tone
                )}
              >
                <span
                  className={cn(
                    "font-heading text-2xl font-black opacity-40",
                    pillar.accent
                  )}
                >
                  {pillar.number}
                </span>
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
