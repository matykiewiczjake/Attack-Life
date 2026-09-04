import type { Metadata } from "next";
import { MessageSquare, Target, Video } from "lucide-react";
import { CoachingHero } from "@/components/coaching/hero";
import { Reveal } from "@/components/reveal";
import { PhotoFeatureGrid } from "@/components/photo-feature-grid";
import { FitSection } from "@/components/coaching/fit-section";
import { FinalCta } from "@/components/final-cta";

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
    glyph: "01",
  },
  {
    icon: Target,
    title: "A Plan Built Around You",
    description:
      "No fixed curriculum. Every coaching relationship starts with where you actually are and what you're trying to change.",
    glyph: "02",
  },
  {
    icon: MessageSquare,
    title: "Real Accountability",
    description:
      "Between sessions, Ryan checks in — coaching that holds you to what you said you'd do.",
    glyph: "03",
  },
];

export default function CoachingPage() {
  return (
    <>
      <CoachingHero />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
            What You Get
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight uppercase sm:text-4xl">
            <span className="text-foreground">Coaching built around you,</span>{" "}
            <span className="text-muted-foreground">not a program.</span>
          </h2>
        </Reveal>
        <div className="mt-10">
          <PhotoFeatureGrid features={whatYouGet} columns={3} />
        </div>
      </section>

      <FitSection />

      <FinalCta />
    </>
  );
}
