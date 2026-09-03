import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { contactHref } from "@/lib/site-config";
import hikerImage from "@/assets/images/final-cta-hiker.webp";

export function FinalCta() {
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
            <h2 className="text-3xl font-black tracking-tight text-primary-foreground uppercase sm:text-4xl">
              Let&apos;s Talk
            </h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              Tell Ryan what you&apos;re working on and where you want to go.
            </p>
            <Button
              nativeButton={false}
              className="mt-5 h-11 rounded-none bg-background px-6 text-sm font-bold text-foreground hover:bg-background/90"
              render={<Link href={contactHref} />}
            >
              Contact Ryan
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
