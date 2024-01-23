import { CustomeCarousel } from "./components/CustomeCarousel";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SubFooter from "./components/SubFooter";
import { CustomeTabs } from "./components/Tabs";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-4xl m-auto py-[60px]">
        <Services />
        <CustomeTabs />
        <CustomeCarousel />
        <Features />
        <Features />
        <SubFooter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
