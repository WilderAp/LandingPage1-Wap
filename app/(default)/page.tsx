export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import ContactUs from "@/components/contactUs";
import Stats from "@/components/stats";
import TeamMembers from "@/components/team";

export default function Home() {
  return (
    <>
      <section id="hero" className="hero">
        <Hero />
      </section>
      <section id="features" className="features">
        <Features />
      </section>
      <section id="features-blocks" className="features-blocks">
        <FeaturesBlocks />
      </section>
      <section id="contact-us" className="contact-us">
        <ContactUs />
      </section>
      <section>
        <Stats />
      </section>
      <section>
        <TeamMembers />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Newsletter />
      </section>
    </>
  );
}
