import Link from "next/link";
import { ArrowRight, Compass, FlaskConical, Mountain } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { HoverLift } from "@/components/hover-lift";

const pillars = [
  {
    icon: Mountain,
    title: "Guided Retreats",
    description:
      "Step away from the noise. Multi-day, small-group retreats designed to reset your mind, body, and direction — guided by Ryan, in person, start to finish.",
    href: "/retreats",
    cta: "Explore Retreats",
  },
  {
    icon: Compass,
    title: "Personal Development & Life Coaching",
    description:
      "Ongoing, one-on-one work for people ready to change how they think, decide, and act. Not a course you finish — a coach who stays in it with you.",
    href: "/coaching",
    cta: "Learn About Coaching",
  },
  {
    icon: FlaskConical,
    title: "Research Peptides",
    description:
      "A research-focused connection point for peptide inquiries. Research-use-only — no pricing, no dosing guidance, no health claims. Contact Ryan to discuss.",
    href: "/peptides",
    cta: "Learn More",
  },
];

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Three ways to work with Ryan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every offering below leads to the same place: a direct
            conversation, not a checkout page.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.href} delay={index * 0.1}>
            <HoverLift className="h-full">
              <Card className="h-full border-border bg-card">
                <CardHeader>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <pillar.icon aria-hidden className="size-5" />
                  </div>
                  <CardTitle className="mt-4 font-heading text-xl">
                    {pillar.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                  >
                    {pillar.cta}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </CardContent>
              </Card>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
