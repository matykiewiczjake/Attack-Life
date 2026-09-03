import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TiltPanel } from "@/components/tilt-panel";

export function FounderStrip() {
  return (
    <section className="bg-card">
      <div className="mx-auto grid max-w-6xl sm:grid-cols-2">
        <Reveal className="min-h-[18rem] sm:min-h-[26rem] lg:min-h-[30rem]">
          {/* Placeholder — replace with a real photo of Ryan */}
          <TiltPanel
            tone="secondary"
            aspect=""
            glyph="R"
            glyphClassName="text-[10rem]"
            className="h-full w-full"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex items-center px-4 py-14 sm:px-10 sm:py-16 lg:px-16"
        >
          <div>
            <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
              Built by Ryan, not a brand team
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              One person&apos;s practice, built for people who are serious
              about changing.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              [Placeholder] Ryan built Attack Life after his own reset —
              walking away from what wasn&apos;t working and rebuilding a
              life on his own terms. Every retreat, every coaching
              relationship, and every conversation starts from that same
              place: no scripts, no franchise playbook, just direct, honest
              work.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5"
            >
              Read Ryan&apos;s story
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
