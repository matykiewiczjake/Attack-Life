import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { contactHref } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-primary [clip-path:polygon(0_2.5rem,100%_0,100%_100%,0_100%)] sm:[clip-path:polygon(0_4rem,100%_0,100%_100%,0_100%)]"
    >
      <span
        aria-hidden
        className="font-heading pointer-events-none absolute -top-6 left-1/2 -z-0 -translate-x-1/2 text-[7rem] leading-none font-black whitespace-nowrap text-primary-foreground/10 uppercase select-none sm:text-[10rem]"
      >
        Let&apos;s talk
      </span>
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-black tracking-tight text-primary-foreground uppercase sm:text-5xl">
            This starts with a conversation.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            No forms that go nowhere, no bots. Tell Ryan what you&apos;re
            working on and where you want to go — he&apos;ll respond
            personally.
          </p>
          <Button
            nativeButton={false}
            size="lg"
            variant="secondary"
            className="mt-8 h-12 rounded-none px-7 text-base font-bold"
            render={<Link href={contactHref} />}
          >
            Contact Ryan
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
