import type { Metadata } from "next";
import Link from "next/link";
import {
  FlaskConical,
  Lock,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { PhotoFeatureGrid } from "@/components/photo-feature-grid";
import { MoleculeGraphic } from "@/components/molecule-graphic";
import { FinalCta } from "@/components/final-cta";
import peptidesBackgroundImage from "@/assets/images/pillars-peptides.webp";

export const metadata: Metadata = {
  title: "Research Peptides",
  description:
    "A research-focused connection point for peptide inquiries — reach out to talk with Ryan directly.",
  alternates: { canonical: "/peptides" },
};

const trustBadges = [
  { icon: FlaskConical, label: "Research Focused" },
  { icon: MessageCircle, label: "Direct Conversation" },
  { icon: Lock, label: "Private & Discreet" },
];

const info = [
  {
    icon: FlaskConical,
    title: "Research Use Only",
    description:
      "Everything discussed here is intended for laboratory research purposes only — not for human consumption.",
    glyph: "01",
  },
  {
    icon: MessageCircle,
    title: "A Direct Conversation",
    description:
      "If you have questions about sourcing or research context, reach out and Ryan will talk it through with you directly.",
    glyph: "02",
  },
];

export default function PeptidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Peptides"
        title="A research-focused connection point."
        description="Ryan connects people with sourcing for peptide research — a direct conversation, not a storefront."
        backgroundImage={peptidesBackgroundImage}
        backgroundImageAlt="Research peptide vials at desert sunset"
      >
        <Button
          nativeButton={false}
          size="lg"
          className="h-12 rounded-none px-6 text-base font-bold"
          render={<Link href="/contact?interest=peptides" />}
        >
          Contact Ryan to Learn More
        </Button>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <badge.icon className="size-4 text-primary" aria-hidden />
              <span className="text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="relative overflow-hidden">
        <MoleculeGraphic className="-bottom-16 -left-16" />
        <MoleculeGraphic className="-top-16 -right-16" flip />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
              What to Know
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-foreground uppercase sm:text-4xl">
              Straightforward, compliant, and direct.
            </h2>
          </Reveal>
          <div className="mt-10">
            <PhotoFeatureGrid features={info} columns={2} />
          </div>

          <Reveal delay={0.2} className="mt-16 flex justify-center">
            <div className="w-full max-w-2xl border-2 border-primary/70 bg-card p-8">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-5 text-primary" aria-hidden />
                <p className="font-heading font-bold text-foreground">
                  Research Use Only
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Peptide information on this site is provided for research
                purposes only. Not for human consumption. Not intended to
                diagnose, treat, cure, or prevent any disease. Nothing on
                this page constitutes medical advice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
