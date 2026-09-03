import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { FramedVisual } from "@/components/framed-visual";
import { contactHref } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10 lg:px-8 lg:py-24">
        <div>
          <Reveal immediate delay={0}>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-primary" />
              <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
                Founder-led, by Ryan
              </span>
            </div>
          </Reveal>

          <Reveal immediate delay={0.1}>
            <h1 className="mt-7 text-5xl leading-[0.95] font-semibold tracking-tight text-balance text-foreground sm:text-6xl lg:text-[5.25rem]">
              Stop planning
              <br />
              your comeback.
              <br />
              <span className="text-primary">Start living it.</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.2}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
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
                className="h-12 rounded-none px-6 text-base"
                render={<Link href={contactHref} />}
              >
                Contact Ryan
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-12 rounded-none px-6 text-base"
                render={<Link href="/about" />}
              >
                Ryan&apos;s Story
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={0.25} className="hidden lg:block">
          {/* Placeholder — replace with real retreat/coaching photography */}
          <FramedVisual aspect="aspect-[3/4]" className="mx-auto max-w-xs" />
        </Reveal>
      </div>
    </section>
  );
}
