import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { TiltPanel } from "@/components/tilt-panel";
import { contactHref } from "@/lib/site-config";

export function DatesSection() {
  return (
    <section className="bg-background">
      <div className="grid sm:grid-cols-2">
        <Reveal className="flex items-center px-4 py-14 sm:px-10 sm:py-16 lg:px-16 xl:px-24">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Retreats run in small cohorts throughout the year.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Upcoming dates and locations aren&apos;t listed publicly —
              reach out and Ryan will let you know what&apos;s next, what it
              costs, and whether it&apos;s a fit for where you&apos;re at.
            </p>
            <Button
              nativeButton={false}
              size="lg"
              variant="outline"
              className="mt-6 h-12 rounded-none px-6 text-base font-bold"
              render={<Link href={contactHref} />}
            >
              Contact Ryan to Book
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative min-h-[16rem] sm:min-h-[22rem]">
          {/* Placeholder — replace with real retreat villa photography */}
          <TiltPanel
            tone="primary"
            aspect=""
            glyph="AL"
            glyphClassName="text-8xl"
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
