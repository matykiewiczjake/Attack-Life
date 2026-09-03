import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { TiltPanel } from "@/components/tilt-panel";
import { contactHref } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="sunset-glow relative border-b border-border/70">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:px-8 lg:py-24">
        <div>
          <Reveal immediate delay={0}>
            <span className="-rotate-2 inline-block bg-foreground px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-background uppercase">
              Founder-led, by Ryan
            </span>
          </Reveal>

          <Reveal immediate delay={0.1}>
            <h1 className="mt-7">
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

          <Reveal immediate delay={0.2}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Attack Life is built on one idea: real change happens through
              real conversations, not funnels or checkout carts. Ryan works
              directly with a limited number of people at a time — through
              guided retreats, one-on-one coaching, and research peptide
              connections.
            </p>
          </Reveal>

          <Reveal immediate delay={0.3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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

        <Reveal immediate delay={0.25} className="hidden lg:block">
          {/* Placeholder — replace with real retreat/coaching photography */}
          <TiltPanel
            tone="secondary"
            aspect="aspect-[3/4]"
            className="mx-auto max-w-xs"
          />
        </Reveal>
      </div>
    </section>
  );
}
