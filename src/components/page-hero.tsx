import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
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
    image?: StaticImageData;
    imageAlt?: string;
  };
  backgroundImage?: StaticImageData;
  backgroundImageAlt?: string;
  children?: ReactNode;
};

/** Shared straight-edged page header used across the interior pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  visual,
  backgroundImage,
  backgroundImageAlt,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative border-b border-border/70",
        !backgroundImage && "sunset-glow"
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt ?? ""}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
      )}

      <div
        className={cn(
          "relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
          visual && "grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        )}
      >
        <div>
          <Reveal immediate delay={0}>
            <span className="inline-block border border-primary bg-background/60 px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-primary uppercase">
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
            {visual.image ? (
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-foreground/10">
                <Image
                  src={visual.image}
                  alt={visual.imageAlt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            ) : (
              // Placeholder — replace with real photography
              <TiltPanel
                tone={visual.tone}
                glyph={visual.glyph}
                aspect="aspect-[4/5]"
                className="w-full"
              />
            )}
          </Reveal>
        )}
      </div>
    </section>
  );
}
