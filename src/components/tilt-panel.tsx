import { cn } from "@/lib/utils";

const tones = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "bg-card text-foreground border-2 border-primary/70",
} as const;

type TiltPanelProps = {
  className?: string;
  aspect?: string;
  rotate?: string;
  tone?: keyof typeof tones;
  glyph?: string;
};

/**
 * A single confidently-rotated, grain-textured color block used as a
 * photography placeholder. Carries a huge low-opacity monogram so it reads
 * as a deliberate graphic mark rather than an empty rectangle.
 */
export function TiltPanel({
  className,
  aspect = "aspect-[3/4]",
  rotate = "-rotate-3",
  tone = "primary",
  glyph = "AL",
}: TiltPanelProps) {
  return (
    <div
      className={cn(
        "texture-grain relative flex w-full items-end overflow-hidden border border-foreground/10",
        tones[tone],
        rotate,
        aspect,
        className
      )}
    >
      <span
        aria-hidden
        className="font-heading pointer-events-none -mb-6 -ml-2 block text-8xl leading-none font-black opacity-15 select-none sm:text-9xl"
      >
        {glyph}
      </span>
    </div>
  );
}
