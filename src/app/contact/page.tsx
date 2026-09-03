import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Ryan",
  description:
    "Tell Ryan what you're working on and where you want to go — retreats, coaching, or research peptides. He responds personally.",
  alternates: { canonical: "/contact" },
};

const expectations = [
  {
    title: "You hear back from Ryan",
    description:
      "Not a team, not a bot — Ryan reads every message and replies personally, usually within 1-2 business days.",
  },
  {
    title: "The conversation comes first",
    description:
      "No automated booking flow. He'll ask questions to understand where you're at before recommending anything.",
  },
  {
    title: "Peptide inquiries stay research-focused",
    description:
      "Ryan can point you to sourcing and research context for your work.",
  },
];

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
        eyebrow="Get in Touch"
        title="This starts with a conversation."
        description="Fill out the form below and tell Ryan what you're working on. Whether it's retreats, coaching, or a peptide research question, he reads and replies to every message himself."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <ContactForm defaultInterest={defaultInterest} />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-border/70 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
              <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
                What to expect
              </p>
              <ul className="mt-6 space-y-6">
                {expectations.map((item) => (
                  <li key={item.title}>
                    <p className="font-heading font-bold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
