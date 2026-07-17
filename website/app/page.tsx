import HeroSection from "@/components/home/HeroSection";
import FreeLiveSection from "@/components/home/FreeLiveSection";
import SampleVideosVoices from "@/components/home/SampleVideosVoices";
import PathToMastery from "@/components/home/PathToMastery";
import ProgramSnapshot from "@/components/home/ProgramSnapshot";
import CasesHighlights from "@/components/home/CasesHighlights";
import TrainingPartners from "@/components/home/TrainingPartners";
import CommunityFellows from "@/components/home/CommunityFellows";
import EventsUpdates from "@/components/home/EventsUpdates";
import FAQPreview from "@/components/home/FAQPreview";
import CTABand from "@/components/home/CTABand";
import FAQSchema from "@/components/seo/FAQSchema";
import EventSchema from "@/components/seo/EventSchema";

export default function Home() {
  return (
    <>
      <EventSchema />
      <FAQSchema />
      <div className="bg-[#F9F6F0]">
        <HeroSection />
        <FreeLiveSection />
        <SampleVideosVoices />
        <PathToMastery />
        <ProgramSnapshot />
        <CasesHighlights />
        <TrainingPartners />
        <CommunityFellows />
        <EventsUpdates />
        <FAQPreview />
        <CTABand />
      </div>
    </>
  );
}
