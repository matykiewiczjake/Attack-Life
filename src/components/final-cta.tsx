import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { contactHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import ctaImage from "@/assets/images/final-cta-sunset-ridge.webp";

type FinalCtaProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  showButton?: boolean;
};

export function FinalCta({
  eyebrow,
  title = "Let's Talk",
  description = "Tell Ryan what you're working on and where you want to go.",
  showButton = true,
}: FinalCtaProps = {}) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src={ctaImage}
          alt=""
          fill
          className="object-cover object-[center_38%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/15" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="max-w-sm">
            {eyebrow && (
              <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
                {eyebrow}
              </p>
            )}
            <h2
              className={cn(
                "text-3xl font-black tracking-tight text-foreground uppercase sm:text-4xl",
                eyebrow && "mt-3"
              )}
            >
              {title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {description}
            </p>
            {showButton && (
              <Button
                nativeButton={false}
                size="lg"
                className="mt-5 h-12 rounded-none px-6 text-base font-bold"
                render={<Link href={contactHref} />}
              >
                Contact Ryan
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
