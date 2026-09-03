import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TiltPanel } from "@/components/tilt-panel";

export function FounderStrip() {
  return (
    <section className="bg-card">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <Reveal>
          {/* Placeholder — replace with a photo of Ryan */}
          <TiltPanel
            tone="primary"
            rotate="rotate-2"
            aspect="aspect-[4/5]"
            className="w-full max-w-sm"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
            Built by Ryan, not a brand team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            This isn&apos;t a wellness company. It&apos;s one person&apos;s
            practice, built for people who are serious about changing.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            [Placeholder] Ryan built Attack Life after his own reset — walking
            away from what wasn&apos;t working and rebuilding a life on his
            own terms. Every retreat, every coaching relationship, and every
            conversation starts from that same place: no scripts, no
            franchise playbook, just direct, honest work.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5"
          >
            Read Ryan&apos;s story
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
