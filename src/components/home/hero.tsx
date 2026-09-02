import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { contactHref } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--accent),transparent)]"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-32">
        <div>
          <Reveal immediate delay={0}>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Founder-led, by Ryan
            </span>
          </Reveal>

          <Reveal immediate delay={0.1}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Stop planning your comeback.
              <span className="block text-primary">Start living it.</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
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
                className="h-12 px-6 text-base"
                render={<Link href={contactHref} />}
              >
                Contact Ryan
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base"
                render={<Link href="/about" />}
              >
                Ryan&apos;s Story
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={0.25} className="hidden lg:block">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/25 via-accent to-secondary">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40 mix-blend-overlay [background-image:radial-gradient(circle_at_30%_20%,white,transparent_45%),radial-gradient(circle_at_75%_70%,white,transparent_40%)]"
            />
            {/* Placeholder visual — replace with real retreat/coaching photography */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
