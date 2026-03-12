import AnnouncementBar from "./components/AnnouncementBar";
import Header       from "./components/Header";
import Hero         from "./components/Hero";
import StatsStrip   from "./components/StatsStrip";
import Services     from "./components/Services";
import Results      from "./components/Results";
import WhoIsItFor   from "./components/WhoIsItFor";
import Pricing      from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ          from "./components/FAQ";
import FinalCTA     from "./components/FinalCTA";
import Footer       from "./components/Footer";

const Divider = ({ teal = false }: { teal?: boolean }) => (
  <div className={teal ? "section-divider-teal" : "section-divider"} />
);

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Hero />
      <Divider />
      <StatsStrip />
      <Divider />
      <Services />
      <Divider teal />
      <Results />
      <Divider />
      <WhoIsItFor />
      <Divider teal />
      <Pricing />
      <Divider />
      <Testimonials />
      <Divider teal />
      <FAQ />
      <Divider />
      <FinalCTA />
      <Footer />
    </>
  );
}
