import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { contactHref } from "@/lib/site-config";
import retreatsHeroImage from "@/assets/images/pillars-retreats.webp";

export function RetreatsHero() {
  return (
    <section className="relative flex min-h-[26rem] items-center overflow-hidden border-b border-border/70 sm:min-h-[30rem] lg:min-h-[34rem]">
      <div className="absolute inset-0">
        <Image
          src={retreatsHeroImage}
          alt="A retreat evening around a fire pit in the desert"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/15" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Reveal immediate delay={0}>
          <span className="inline-block border border-primary bg-background/60 px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-primary uppercase">
            Guided Retreats
          </span>
        </Reveal>

        <Reveal immediate delay={0.1}>
          <h1 className="mt-6 max-w-xl text-5xl leading-[0.95] font-black tracking-tight text-foreground uppercase sm:text-6xl lg:text-7xl">
            Reset.
            <br />
            Reconnect.
            <br />
            Rebuild.
          </h1>
        </Reveal>

        <Reveal immediate delay={0.2}>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Multi-day, small-group retreats led by Ryan — built to pull you
            out of autopilot and give you space to think clearly about
            what&apos;s next.
          </p>
        </Reveal>

        <Reveal immediate delay={0.3} className="mt-8">
          <Button
            nativeButton={false}
            size="lg"
            className="h-12 rounded-none px-6 text-base font-bold"
            render={<Link href={contactHref} />}
          >
            Contact Ryan to Book
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
