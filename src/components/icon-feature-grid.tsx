import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type IconFeatureGridProps = {
  features: Feature[];
  columns?: 2 | 3;
};

export function IconFeatureGrid({ features, columns = 2 }: IconFeatureGridProps) {
  return (
    <div
      className={cn(
        "grid gap-5",
        columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      )}
    >
      {features.map((feature, index) => (
        <Reveal key={feature.title} delay={index * 0.08}>
          <div className="h-full border border-border/70 bg-card p-6 transition-colors duration-300 hover:border-primary/50">
            <feature.icon className="size-6 text-primary" aria-hidden />
            <p className="font-heading mt-4 font-bold text-foreground">
              {feature.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
