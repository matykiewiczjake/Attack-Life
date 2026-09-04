import { cn } from "@/lib/utils";

type MoleculeGraphicProps = {
  className?: string;
  flip?: boolean;
};

/** Decorative molecular-network graphic used on the peptides page. */
export function MoleculeGraphic({ className, flip }: MoleculeGraphicProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      className={cn(
        "pointer-events-none absolute h-64 w-64 opacity-40 select-none sm:h-80 sm:w-80",
        flip && "-scale-x-100",
        className
      )}
    >
      <g
        stroke="oklch(0.72 0.13 230)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      >
        <line x1="40" y1="320" x2="120" y2="260" />
        <line x1="120" y1="260" x2="110" y2="170" />
        <line x1="120" y1="260" x2="200" y2="280" />
        <line x1="200" y1="280" x2="260" y2="220" />
        <line x1="110" y1="170" x2="180" y2="110" />
        <line x1="180" y1="110" x2="260" y2="140" />
        <line x1="260" y1="140" x2="260" y2="220" />
        <line x1="260" y1="220" x2="340" y2="190" />
        <line x1="180" y1="110" x2="160" y2="40" />
        <line x1="40" y1="320" x2="20" y2="240" />
      </g>
      <g fill="oklch(0.72 0.13 230)">
        <circle cx="40" cy="320" r="5" opacity="0.75" />
        <circle cx="120" cy="260" r="7" opacity="0.85" />
        <circle cx="110" cy="170" r="4" opacity="0.6" />
        <circle cx="200" cy="280" r="5" opacity="0.7" />
        <circle cx="260" cy="220" r="8" opacity="0.9" />
        <circle cx="180" cy="110" r="5" opacity="0.7" />
        <circle cx="260" cy="140" r="4" opacity="0.6" />
        <circle cx="340" cy="190" r="6" opacity="0.75" />
        <circle cx="160" cy="40" r="4" opacity="0.55" />
        <circle cx="20" cy="240" r="4" opacity="0.55" />
      </g>
    </svg>
  );
}
