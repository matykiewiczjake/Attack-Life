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
        <div className="absolute inset-0 bg-gradient-to-r from-primary from-65% via-primary/90 via-85% to-primary/60 sm:from-40% sm:via-primary/40 sm:via-60% sm:to-transparent" />
      </div>

      <span
        aria-hidden
        className="font-heading pointer-events-none absolute -bottom-8 -left-4 text-[5rem] leading-none font-black whitespace-nowrap text-primary-foreground/10 uppercase select-none sm:text-[7rem]"
      >
        Let&apos;s talk
      </span>
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-primary-foreground uppercase sm:text-3xl lg:text-4xl">
                This starts with a conversation.
              </h2>
              <p className="mt-2 max-w-md text-primary-foreground/85">
                Tell Ryan what you&apos;re working on and where you want to
                go.
              </p>
            </div>
            <Button
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="h-12 shrink-0 rounded-none px-7 text-base font-bold"
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
