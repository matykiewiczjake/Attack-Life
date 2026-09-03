import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TiltPanel } from "@/components/tilt-panel";

export function FounderStrip() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            {/* Placeholder — replace with a photo of Ryan */}
            <TiltPanel
              tone="primary"
              aspect="aspect-square"
              glyph="R"
              glyphClassName="text-4xl"
              className="w-16 shrink-0 sm:w-20"
            />
            <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
              Built by Ryan, not a brand team
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One person&apos;s practice, built for people who are serious
            about changing.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            [Placeholder] Ryan built Attack Life after his own reset —
            walking away from what wasn&apos;t working and rebuilding a life
            on his own terms. Every retreat, every coaching relationship,
            and every conversation starts from that same place: no scripts,
            no franchise playbook, just direct, honest work.
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
