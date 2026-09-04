import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { contactHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import hikerImage from "@/assets/images/final-cta-hiker.webp";

type FinalCtaProps = {
  eyebrow?: string;
  title?: string;
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
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={hikerImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary from-20% via-primary/55 via-45% to-primary/15" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="max-w-sm">
            {eyebrow && (
              <p className="text-sm font-bold tracking-[0.15em] text-primary-foreground/80 uppercase">
                {eyebrow}
              </p>
            )}
            <h2
              className={cn(
                "text-3xl font-black tracking-tight text-primary-foreground uppercase sm:text-4xl",
                eyebrow && "mt-3"
              )}
            >
              {title}
            </h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              {description}
            </p>
            {showButton && (
              <Button
                nativeButton={false}
                className="mt-5 h-11 rounded-none bg-background px-6 text-sm font-bold text-foreground hover:bg-background/90"
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
