import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Tape from "../components/Tape";
import { BackgroundBoxesDemo } from "../components/Boxes";

const Home = () => {
  return (
    <>
    <Navbar/>
    
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <Tape />
      <FeatureSection />

      <Pricing />
      <Testimonials />
      <BackgroundBoxesDemo />
      <Footer />
    </div>
  </>
  )
}

export default Home