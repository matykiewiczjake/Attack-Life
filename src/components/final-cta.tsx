import type { ReactNode } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { contactHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import hikerImage from "@/assets/images/final-cta-hiker.webp";

type FinalCtaProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  showButton?: boolean;
  /** "primary" is the sitewide solid-gold band; "photo" is a darker, photo-led treatment. */
  variant?: "primary" | "photo";
  backgroundImage?: StaticImageData;
  backgroundImageAlt?: string;
};

export function FinalCta({
  eyebrow,
  title = "Let's Talk",
  description = "Tell Ryan what you're working on and where you want to go.",
  showButton = true,
  variant = "primary",
  backgroundImage,
  backgroundImageAlt = "",
}: FinalCtaProps = {}) {
  const isPhoto = variant === "photo";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        isPhoto ? "bg-background" : "bg-primary"
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage ?? hikerImage}
          alt={backgroundImageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className={cn(
            "absolute inset-0",
            isPhoto
              ? "bg-gradient-to-r from-background via-background/70 to-background/15"
              : "bg-gradient-to-r from-primary from-20% via-primary/55 via-45% to-primary/15"
          )}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="max-w-sm">
            {eyebrow && (
              <p
                className={cn(
                  "text-sm font-bold tracking-[0.15em] uppercase",
                  isPhoto ? "text-primary" : "text-primary-foreground/80"
                )}
              >
                {eyebrow}
              </p>
            )}
            <h2
              className={cn(
                "text-3xl font-black tracking-tight uppercase sm:text-4xl",
                isPhoto ? "text-foreground" : "text-primary-foreground",
                eyebrow && "mt-3"
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mt-3 leading-relaxed",
                isPhoto ? "text-muted-foreground" : "text-primary-foreground/85"
              )}
            >
              {description}
            </p>
            {showButton && (
              <Button
                nativeButton={false}
                size={isPhoto ? "lg" : undefined}
                className={
                  isPhoto
                    ? "mt-5 h-12 rounded-none px-6 text-base font-bold"
                    : "mt-5 h-11 rounded-none bg-background px-6 text-sm font-bold text-foreground hover:bg-background/90"
                }
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
