import HeroSection from "@/components/sections/landing/HeroSection";
import NewsLetter from "@/components/sections/landing/NewsLetter";
import Testimonials from "@/components/sections/landing/Testimonials";
import WhyChooseUs from "@/components/sections/landing/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-32  my-16 px-4 md:px-16 overflow-hidden">
        <HeroSection />
        <WhyChooseUs />
        <Testimonials />
        <NewsLetter />
      </div>
    </main>
  );
}
