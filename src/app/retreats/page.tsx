import type { Metadata } from "next";
import Link from "next/link";
import { CalendarRange, Home as HomeIcon, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { IconFeatureGrid } from "@/components/icon-feature-grid";
import { FinalCta } from "@/components/final-cta";
import { contactHref } from "@/lib/site-config";

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
  },
  {
    icon: CalendarRange,
    title: "Multi-Day Format",
    description:
      "Several days away from your normal routine, structured around reflection, movement, and honest conversation.",
  },
  {
    icon: HomeIcon,
    title: "Lodging & Meals Included",
    description:
      "Everything during the retreat is handled — you show up and do the work.",
  },
  {
    icon: MessageCircle,
    title: "Post-Retreat Follow-Up",
    description:
      "A check-in after you're home, so what you build on retreat doesn't stay on retreat.",
  },
];

export default function RetreatsPage() {
  return (
    <>
      <PageHero
        eyebrow="Guided Retreats"
        title="Reset. Reconnect. Rebuild."
        description="Multi-day, small-group retreats led by Ryan — built to pull you out of autopilot and give you space to think clearly about what's next."
        visual={{ tone: "primary", glyph: "GR" }}
      >
        <Button
          nativeButton={false}
          size="lg"
          className="h-12 rounded-none px-6 text-base font-bold"
          render={<Link href={contactHref} />}
        >
          Contact Ryan to Book
        </Button>
      </PageHero>

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
          <IconFeatureGrid features={included} />
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
              Dates &amp; Locations
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Retreats run in small cohorts throughout the year.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              [Placeholder] Upcoming dates and locations aren&apos;t listed
              publicly — reach out and Ryan will let you know what&apos;s
              next, what it costs, and whether it&apos;s a fit for where
              you&apos;re at.
            </p>
            <Button
              nativeButton={false}
              size="lg"
              variant="outline"
              className="mt-8 h-12 rounded-none px-6 text-base font-bold"
              render={<Link href={contactHref} />}
            >
              Contact Ryan to Book
            </Button>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
