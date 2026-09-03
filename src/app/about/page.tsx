import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/final-cta";
import { contactHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Ryan",
  description:
    "Ryan built Attack Life after his own reset — walking away from what wasn't working and rebuilding a life on his own terms.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Direct over comfortable",
    description:
      "Ryan says what he actually thinks, not what's easiest to hear. That's the point.",
  },
  {
    title: "Personal over scaled",
    description:
      "No franchise playbook, no rotating staff. Every retreat, coaching relationship, and conversation runs through Ryan directly.",
  },
  {
    title: "Practice over theory",
    description:
      "Everything here comes from what Ryan has actually done, tested, and rebuilt in his own life — not a certification course.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ryan"
        title="Built by Ryan, not a brand team."
        description="Attack Life is one person's practice, built for people who are serious about changing. Here's how it started."
        visual={{ tone: "primary", glyph: "RS" }}
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
            The Story
          </p>
          <div className="mt-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              [Placeholder] Ryan built Attack Life after his own reset —
              walking away from what wasn&apos;t working and rebuilding a
              life on his own terms. The version of Ryan running retreats and
              coaching clients today isn&apos;t the version who started; the
              work is a direct result of what changed along the way.
            </p>
            <p>
              [Placeholder] After years of watching people around him plan
              comebacks that never started, Ryan started running small,
              in-person retreats and taking on a handful of coaching
              clients — deliberately kept small enough that he could stay
              personally involved in every relationship.
            </p>
            <p>
              [Placeholder] That&apos;s still the model. No scripts, no
              franchise playbook — just direct, honest work with people who
              are ready for it.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
              How Ryan Works
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-foreground uppercase sm:text-4xl">
              A few things that don&apos;t change.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <div className="h-full border border-border/70 bg-background p-6">
                  <p className="font-heading font-bold text-foreground">
                    {value.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Button
              nativeButton={false}
              size="lg"
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
