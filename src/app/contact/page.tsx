import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { ConnectChannels } from "@/components/contact/connect-channels";
import { FinalCta } from "@/components/final-cta";
import contactHeroImage from "@/assets/images/contact-hero-overlook.jpg";

export const metadata: Metadata = {
  title: "Contact Ryan",
  description:
    "Tell Ryan what you're working on and where you want to go — retreats, coaching, or research peptides. He responds personally.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const params = await searchParams;
  const interestParam = params.interest;
  const defaultInterest = Array.isArray(interestParam)
    ? interestParam[0]
    : interestParam;

  return (
    <>
      <PageHero
        eyebrow="Contact Ryan"
        title="Let's talk about what's next."
        description="Have a question, want to learn more, or ready to take the next step? Tell Ryan where you're at and what you're looking for. He'll get back to you personally."
        visual={{
          tone: "primary",
          glyph: "CR",
          image: contactHeroImage,
          imageAlt: "Ryan looking out over the valley near Machu Picchu",
        }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
              Send a Message
            </p>
            <div className="mt-6">
              <ContactForm defaultInterest={defaultInterest} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-border/70 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
              <ConnectChannels />
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta showButton={false} />
    </>
  );
}
