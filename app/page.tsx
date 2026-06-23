import Navbar from "@/components/Navbar";
import ReviewsTab from "@/components/ReviewsTab";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PhotoGrid from "@/components/PhotoGrid";
import ThreeWaysToSell from "@/components/ThreeWaysToSell";
import BuySellCTA from "@/components/BuySellCTA";
import MeetTheTeam from "@/components/MeetTheTeam";
import ServingArea from "@/components/ServingArea";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <ReviewsTab />
      <Navbar floating />
      <Hero />
      <StatsBar />
      <PhotoGrid />
      <ThreeWaysToSell />
      <BuySellCTA />
      <MeetTheTeam />
      <ServingArea />
      <Footer />
    </main>
  );
}
