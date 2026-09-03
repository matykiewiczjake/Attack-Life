import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { TiltPanel } from "@/components/tilt-panel";
import { contactHref } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="sunset-glow relative border-b border-border/70">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal immediate delay={0}>
          <span className="inline-block bg-foreground px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-background uppercase">
            Founder-led, by Ryan
          </span>
        </Reveal>

        <Reveal immediate delay={0.1}>
          <h1 className="mt-7 max-w-4xl">
            <span className="block text-6xl leading-[0.85] font-black tracking-tight text-foreground uppercase sm:text-7xl lg:text-8xl">
              Stop
            </span>
            <span className="mt-1 block text-3xl leading-tight font-medium text-muted-foreground italic sm:text-4xl">
              planning your comeback.
            </span>
            <span className="mt-2 block text-6xl leading-[0.85] font-black tracking-tight text-primary uppercase sm:text-7xl lg:text-8xl">
              Start living.
            </span>
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <Reveal immediate delay={0.2}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Attack Life is Ryan&apos;s personal development practice —
              guided retreats, one-on-one coaching, and research peptide
              connections. Every path starts the same way: a direct
              conversation with Ryan, so the work fits you, not a program.
            </p>
          </Reveal>

          <Reveal immediate delay={0.3}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                nativeButton={false}
                size="lg"
                className="h-12 rounded-none px-6 text-base font-bold"
                render={<Link href={contactHref} />}
              >
                Contact Ryan
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-12 rounded-none px-6 text-base font-bold"
                render={<Link href="/about" />}
              >
                Ryan&apos;s Story
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={0.35} className="mt-14">
          {/* Placeholder — replace with real retreat/coaching photography */}
          <TiltPanel
            tone="secondary"
            aspect="aspect-[21/9]"
            glyphClassName="text-[5rem] sm:text-[8rem]"
            className="w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
