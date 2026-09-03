import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { TiltPanel } from "@/components/tilt-panel";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  visual?: {
    tone: "primary" | "secondary" | "outline";
    glyph: string;
  };
  children?: ReactNode;
};

/** Shared straight-edged page header used across the interior pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  visual,
  children,
}: PageHeroProps) {
  return (
    <section className="sunset-glow relative border-b border-border/70">
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
          visual && "grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        )}
      >
        <div>
          <Reveal immediate delay={0}>
            <span className="inline-block bg-foreground px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-background uppercase">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal immediate delay={0.1}>
            <h1 className="mt-6 text-5xl leading-[0.95] font-black tracking-tight text-foreground uppercase sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Reveal>

          <Reveal immediate delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>

          {children && (
            <Reveal immediate delay={0.3} className="mt-8">
              {children}
            </Reveal>
          )}
        </div>

        {visual && (
          <Reveal immediate delay={0.25}>
            {/* Placeholder — replace with real photography */}
            <TiltPanel
              tone={visual.tone}
              glyph={visual.glyph}
              aspect="aspect-[4/5]"
              className="w-full"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
