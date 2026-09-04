import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { IconFeatureGrid } from "@/components/icon-feature-grid";
import { FinalCta } from "@/components/final-cta";
import peptidesHeroImage from "@/assets/images/peptides-hero.jpg";

export const metadata: Metadata = {
  title: "Research Peptides",
  description:
    "A research-focused connection point for peptide inquiries — reach out to talk with Ryan directly.",
  alternates: { canonical: "/peptides" },
};

const info = [
  {
    icon: FlaskConical,
    title: "Research Use Only",
    description:
      "Everything discussed here is intended for laboratory research purposes only — not for human consumption.",
  },
  {
    icon: MessageCircle,
    title: "A Direct Conversation",
    description:
      "If you have questions about sourcing or research context, reach out and Ryan will talk it through with you directly.",
  },
];

export default function PeptidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Peptides"
        title="A research-focused connection point."
        description="Ryan connects people with sourcing for peptide research — a direct conversation, not a storefront."
        visual={{
          tone: "outline",
          glyph: "RP",
          image: peptidesHeroImage,
          imageAlt: "Overlooking Machu Picchu",
        }}
      >
        <Button
          nativeButton={false}
          size="lg"
          className="h-12 rounded-none px-6 text-base font-bold"
          render={<Link href="/contact?interest=peptides" />}
        >
          Contact Ryan to Learn More
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
            What to Know
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-foreground uppercase sm:text-4xl">
            Straightforward, compliant, and direct.
          </h2>
        </Reveal>
        <div className="mt-10">
          <IconFeatureGrid features={info} columns={2} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <Reveal>
          <div className="border-2 border-primary/70 bg-card p-8">
            <p className="font-heading font-bold text-foreground">
              Research Use Only
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Peptide information on this site is provided for research
              purposes only. Not for human consumption. Not intended to
              diagnose, treat, cure, or prevent any disease. Nothing on this
              page constitutes medical advice.
            </p>
          </div>
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
