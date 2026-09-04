import type { Metadata } from "next";
import { CalendarRange, Home as HomeIcon, Users } from "lucide-react";
import { RetreatsHero } from "@/components/retreats/hero";
import { Reveal } from "@/components/reveal";
import { IncludedGrid } from "@/components/retreats/included-grid";
import { DatesSection } from "@/components/retreats/dates-section";
import { FinalCta } from "@/components/final-cta";
import smallGroupsImage from "@/assets/images/retreats-small-groups.jpg";
import mealsImage from "@/assets/images/retreats-meals.jpg";
import multiDayImage from "@/assets/images/retreats-multi-day.jpg";

export const metadata: Metadata = {
  title: "Guided Retreats",
  description:
    "Multi-day, small-group retreats led by Ryan — built to pull you out of autopilot and give you real space to reset.",
  alternates: { canonical: "/retreats" },
};

const included = [
  {
    icon: Users,
    title: "Small, Intentional Groups",
    description:
      "Retreats stay small by design — enough people to build real connection, few enough that Ryan works with everyone directly.",
    glyph: "01",
    image: smallGroupsImage,
    imageAlt: "A small retreat group together at Machu Picchu",
  },
  {
    icon: CalendarRange,
    title: "Multi-Day Format",
    description:
      "Several days away from your normal routine, structured around reflection, movement, and honest conversation.",
    glyph: "02",
    image: multiDayImage,
    imageAlt: "The retreat group together overlooking the Maras salt terraces",
  },
  {
    icon: HomeIcon,
    title: "Lodging & Meals Included",
    description:
      "Everything during the retreat is handled — you show up and do the work.",
    glyph: "03",
    image: mealsImage,
    imageAlt: "The retreat group sharing a meal together",
  },
];

export default function RetreatsPage() {
  return (
    <>
      <RetreatsHero />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
            What&apos;s Included
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-foreground uppercase sm:text-4xl">
            Everything you need is handled, so you can focus on the work.
          </h2>
        </Reveal>
        <div className="mt-10">
          <IncludedGrid features={included} />
        </div>
      </section>

      <DatesSection />

      <FinalCta />
    </>
  );
}
