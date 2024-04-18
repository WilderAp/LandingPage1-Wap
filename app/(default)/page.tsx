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
      <Hero />
      <Features />
      <FeaturesBlocks />
      <ContactUs />
      <Stats />
      <TeamMembers />
      <Testimonials />
      <Newsletter />
    </>
  );
}
