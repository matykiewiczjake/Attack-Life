import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageSquare, Target, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { IconFeatureGrid } from "@/components/icon-feature-grid";
import { FinalCta } from "@/components/final-cta";
import { contactHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Personal Development & Life Coaching",
  description:
    "One-on-one coaching with Ryan for people ready to change how they think, decide, and act — real accountability, built around where you are right now.",
  alternates: { canonical: "/coaching" },
};

const whatYouGet = [
  {
    icon: Video,
    title: "Regular 1:1 Sessions",
    description:
      "Direct time with Ryan, not a rotating roster of coaches — consistent sessions built around your goals.",
  },
  {
    icon: Target,
    title: "A Plan Built Around You",
    description:
      "No fixed curriculum. Every coaching relationship starts with where you actually are and what you're trying to change.",
  },
  {
    icon: MessageSquare,
    title: "Real Accountability",
    description:
      "Between sessions, Ryan checks in — coaching that holds you to what you said you'd do.",
  },
];

const fitSignals = [
  "You're ready for direct feedback, not just encouragement.",
  "You're willing to do the work between sessions, not just during them.",
  "You have something specific you're trying to change — not just a vague sense something's off.",
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Development & Coaching"
        title="Change how you think, decide, and act."
        description="One-on-one coaching with Ryan for people who are done planning and ready to do the work — real accountability, built around where you are right now."
        visual={{ tone: "secondary", glyph: "PD" }}
      >
        <Button
          nativeButton={false}
          size="lg"
          className="h-12 rounded-none px-6 text-base font-bold"
          render={<Link href={contactHref} />}
        >
          Contact Ryan
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
            What You Get
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-foreground uppercase sm:text-4xl">
            Coaching built around you, not a program.
          </h2>
        </Reveal>
        <div className="mt-10">
          <IconFeatureGrid features={whatYouGet} columns={3} />
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
              Is This a Fit?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Coaching works when you&apos;re ready for it.
            </h2>
            <ul className="mt-8 space-y-4">
              {fitSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span className="text-lg leading-relaxed text-muted-foreground">
                    {signal}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              nativeButton={false}
              size="lg"
              variant="outline"
              className="mt-10 h-12 rounded-none px-6 text-base font-bold"
              render={<Link href={contactHref} />}
            >
              Contact Ryan
            </Button>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
