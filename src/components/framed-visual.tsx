import { cn } from "@/lib/utils";

type FramedVisualProps = {
  className?: string;
  aspect?: string;
  offset?: "br" | "bl";
};

/**
 * Two-layer photo-placeholder frame: a solid color block offset behind a
 * grain-textured panel. Stands in for real photography without leaning on
 * the generic soft-gradient-blob pattern.
 */
export function FramedVisual({
  className,
  aspect = "aspect-[4/5]",
  offset = "br",
}: FramedVisualProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn(
          "absolute h-full w-full bg-primary",
          offset === "br"
            ? "right-0 bottom-0 sm:-right-4 sm:-bottom-4"
            : "bottom-0 left-0 sm:-bottom-4 sm:-left-4"
        )}
      />
      <div
        className={cn(
          "texture-grain relative w-full border border-foreground/15 bg-gradient-to-b from-accent to-secondary",
          aspect
        )}
      />
    </div>
  );
}
