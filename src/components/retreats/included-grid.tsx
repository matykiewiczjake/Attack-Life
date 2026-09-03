import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TiltPanel } from "@/components/tilt-panel";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  glyph: string;
};

type IncludedGridProps = {
  features: Feature[];
};

export function IncludedGrid({ features }: IncludedGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {features.map((feature, index) => (
        <Reveal key={feature.title} delay={index * 0.08}>
          <div className="h-full overflow-hidden border border-border/70 bg-card">
            {/* Placeholder — replace with real retreat photography */}
            <TiltPanel
              tone="secondary"
              aspect="aspect-[4/3]"
              glyph={feature.glyph}
              glyphClassName="text-6xl"
              className="w-full"
            />
            <div className="p-6">
              <feature.icon className="size-6 text-primary" aria-hidden />
              <p className="font-heading mt-4 font-bold text-foreground">
                {feature.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
