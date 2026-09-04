import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FlaskConical, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/final-cta";
import peptidesBackgroundImage from "@/assets/images/pillars-peptides.webp";
import researchNotesImage from "@/assets/images/peptides-research-notes.webp";
import directConversationImage from "@/assets/images/peptides-direct-conversation.webp";

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
    image: researchNotesImage,
    imageAlt: "Research notes and peptide vials on a lab bench",
  },
  {
    icon: MessageCircle,
    title: "A Direct Conversation",
    description:
      "If you have questions about sourcing or research context, reach out and Ryan will talk it through with you directly.",
    image: directConversationImage,
    imageAlt: "Ryan on a video call at his desk",
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
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
            What to Know
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground uppercase sm:text-4xl">
            Straightforward, compliant, and direct.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {info.map((item) => (
            <Reveal key={item.title}>
              <div className="relative aspect-[5/2] w-full overflow-hidden border border-border/70">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2.5">
                    <item.icon className="size-5 text-primary" aria-hidden />
                    <p className="font-heading font-bold text-foreground">
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
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
