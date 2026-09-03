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
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/10" />
      </div>

      <span
        aria-hidden
        className="font-heading pointer-events-none absolute -bottom-10 -left-4 text-[7rem] leading-none font-black whitespace-nowrap text-primary-foreground/10 uppercase select-none sm:text-[10rem]"
      >
        Let&apos;s talk
      </span>
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-primary-foreground uppercase sm:text-5xl">
                This starts with a conversation.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
                Tell Ryan what you&apos;re working on and where you want to
                go — he&apos;ll respond personally.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button
                nativeButton={false}
                size="lg"
                variant="secondary"
                className="h-12 rounded-none px-7 text-base font-bold"
                render={<Link href={contactHref} />}
              >
                Contact Ryan
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
