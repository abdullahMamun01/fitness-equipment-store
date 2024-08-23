import RootLayout from "./layout/RootLayout";
import HeroSection from "./HeroSection";
import CategoriesSection from "./components/categories/CategoriesSection";
import FeaturedEquipmentsSection from "./components/FeaturedEquipment/FeaturedEquipmentsSection";
import BenefitSection from "./components/BenefitSection";
import Footer from "./components/common/Footer";
import ReviewGallery from "./components/Gallery/ReviewGallery";


export default function App() {
  return (
    <>

        <HeroSection />
        <CategoriesSection />
        <FeaturedEquipmentsSection />
        <BenefitSection />
        <ReviewGallery/>
    </>
  );
}
