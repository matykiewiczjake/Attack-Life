import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { TiltPanel } from "@/components/tilt-panel";
import { contactHref } from "@/lib/site-config";

const fitSignals = [
  "You're ready for direct feedback, not just encouragement.",
  "You're willing to do the work between sessions, not just during them.",
  "You have something specific you're trying to change — not just a vague sense something's off.",
];

export function FitSection() {
  return (
    <section className="bg-background">
      <div className="grid sm:grid-cols-2">
        <Reveal className="relative min-h-[16rem] sm:min-h-[22rem]">
          {/* Placeholder — replace with real coaching photography */}
          <TiltPanel
            tone="outline"
            aspect=""
            glyph="PD"
            glyphClassName="text-8xl"
            className="h-full w-full"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex items-center px-4 py-14 sm:px-10 sm:py-16 lg:px-16 xl:px-24"
        >
          <div className="max-w-lg">
            <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
              Is This a Fit?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Coaching works when you&apos;re ready for it.
            </h2>
            <ul className="mt-8 space-y-4">
              {fitSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span className="leading-relaxed text-muted-foreground">
                    {signal}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              nativeButton={false}
              size="lg"
              variant="outline"
              className="mt-8 h-12 rounded-none px-6 text-base font-bold"
              render={<Link href={contactHref} />}
            >
              Contact Ryan
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
