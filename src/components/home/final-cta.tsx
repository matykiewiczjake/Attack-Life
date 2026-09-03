import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { contactHref } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
            This starts with a conversation.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
            No forms that go nowhere, no bots. Tell Ryan what you&apos;re
            working on and where you want to go — he&apos;ll respond
            personally.
          </p>
          <Button
            nativeButton={false}
            size="lg"
            variant="secondary"
            className="mt-8 h-12 rounded-none px-7 text-base"
            render={<Link href={contactHref} />}
          >
            Contact Ryan
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
