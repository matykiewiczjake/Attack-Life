import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { TiltPanel } from "@/components/tilt-panel";
import { contactHref } from "@/lib/site-config";

export function CoachingHero() {
  return (
    <section className="relative flex min-h-[26rem] items-center overflow-hidden border-b border-border/70 sm:min-h-[30rem] lg:min-h-[34rem]">
      <div className="absolute inset-0">
        {/* Placeholder — replace with real coaching photography */}
        <TiltPanel
          tone="secondary"
          aspect=""
          glyphClassName="text-[10rem] sm:text-[16rem]"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/15" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Reveal immediate delay={0}>
          <span className="inline-block border border-primary bg-background/60 px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-primary uppercase">
            Personal Development &amp; Coaching
          </span>
        </Reveal>

        <Reveal immediate delay={0.1}>
          <h1 className="mt-6 max-w-xl text-5xl leading-[0.95] font-black tracking-tight text-foreground uppercase sm:text-6xl lg:text-7xl">
            Change how you think, decide, and act.
          </h1>
        </Reveal>

        <Reveal immediate delay={0.2}>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            One-on-one coaching with Ryan for people who are done planning
            and ready to do the work — real accountability, built around
            where you are right now.
          </p>
        </Reveal>

        <Reveal immediate delay={0.3} className="mt-8">
          <Button
            nativeButton={false}
            size="lg"
            className="h-12 rounded-none px-6 text-base font-bold"
            render={<Link href={contactHref} />}
          >
            Contact Ryan
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
