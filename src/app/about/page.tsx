import type { Metadata } from "next";
import { Compass, Mountain, Users } from "lucide-react";
import { AboutHero } from "@/components/about/hero";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/final-cta";
import ctaImage from "@/assets/images/about-cta-sunset-ridge.webp";

export const metadata: Metadata = {
  title: "About Ryan",
  description:
    "Ryan built Attack Life after his own reset — walking away from what wasn't working and rebuilding a life on his own terms.",
  alternates: { canonical: "/about" },
};

const storyParagraphs = [
  "Ryan built Attack Life after his own reset — walking away from what wasn't working and rebuilding a life on his own terms.",
  "The version of Ryan running retreats and coaching clients today isn't the version who started; the work is a direct result of what changed along the way.",
  "After years of watching people around him plan comebacks that never started, Ryan started running small, in-person retreats and taking on a handful of coaching clients — deliberately kept small enough that he could stay personally involved in every relationship.",
  "That's still the model. No scripts, no franchise playbook — just direct, honest work with people who are ready for it.",
];

const approach = [
  {
    icon: Mountain,
    title: "Real Experience",
    description: "Lessons from the field, not a playbook.",
  },
  {
    icon: Users,
    title: "A Personal Approach",
    description: "Small groups. Direct coaching. Real relationships.",
  },
  {
    icon: Compass,
    title: "A Clearer Path",
    description: "Practical tools, real environments, lasting change.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase">
              The Story
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight uppercase sm:text-4xl">
              <span className="block text-foreground">
                A different approach
              </span>
              <span className="block text-primary">to a better you.</span>
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-10 border-t border-border/70 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
              {approach.map((item) => (
                <li key={item.title} className="flex items-start gap-5">
                  <item.icon
                    className="size-10 shrink-0 text-primary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <p className="font-heading font-bold text-foreground uppercase">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <FinalCta
        variant="photo"
        eyebrow="Let's Talk"
        title={
          <>
            <span className="block">Ready for</span>
            <span className="block text-primary">What&apos;s next?</span>
          </>
        }
        description="Tell Ryan what you're working on and where you want to go."
        backgroundImage={ctaImage}
        backgroundImageAlt="Sunset over a mountain ridge"
      />
    </>
  );
}
