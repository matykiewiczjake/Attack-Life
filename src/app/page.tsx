import { Hero } from "@/components/home/hero";
import { Pillars } from "@/components/home/pillars";
import { FounderStrip } from "@/components/home/founder-strip";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <FounderStrip />
      <FinalCta />
    </>
  );
}
