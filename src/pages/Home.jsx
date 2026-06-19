import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Collections from "../components/Collections";
import AboutSection from "../components/AboutSection";
import ProductsSections from "../components/ProductsSections";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9F7] text-[#403434] relative overflow-hidden">
    <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#F3D8D8] rounded-full blur-3xl opacity-40 -z-10"></div>
    <Navbar />
    <HeroSection />
    <Collections />
    <AboutSection />
    <ProductsSections />
    <Footer />
    
    </div>

  );
}

export default Home;