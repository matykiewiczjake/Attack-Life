import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const pillars = [
  {
    number: "01",
    title: "Guided Retreats",
    description:
      "Step away from the noise. Multi-day, small-group retreats designed to reset your mind, body, and direction — guided by Ryan, in person, start to finish.",
    href: "/retreats",
    cta: "Explore Retreats",
  },
  {
    number: "02",
    title: "Personal Development & Life Coaching",
    description:
      "Ongoing, one-on-one work for people ready to change how they think, decide, and act. Not a course you finish — a coach who stays in it with you.",
    href: "/coaching",
    cta: "Learn About Coaching",
  },
  {
    number: "03",
    title: "Research Peptides",
    description:
      "A research-focused connection point for peptide inquiries. Research-use-only — no pricing, no dosing guidance, no health claims. Contact Ryan to discuss.",
    href: "/peptides",
    cta: "Learn More",
  },
];

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-md text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Three ways to work with Ryan
          </h2>
          <p className="max-w-sm text-muted-foreground sm:text-right">
            Every offering below leads to the same place: a direct
            conversation, not a checkout page.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 border-t border-border">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.href} delay={index * 0.08}>
            <Link
              href={pillar.href}
              className="group grid grid-cols-[3.5rem_1fr] items-start gap-x-6 gap-y-4 border-b border-border py-10 transition-colors sm:grid-cols-[6rem_1fr_auto] sm:items-center sm:gap-x-10"
            >
              <span className="font-heading text-4xl font-semibold text-primary/35 transition-colors group-hover:text-primary sm:text-6xl">
                {pillar.number}
              </span>
              <div className="max-w-xl">
                <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary sm:hidden">
                  {pillar.cta}
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
              <div className="hidden items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1 sm:flex">
                {pillar.cta}
                <ArrowRight className="size-4" aria-hidden />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
