import AboutSection from "./AboutSection";
import CoffeeSection from "./CoffeeSection";
import CroissantsSection from "./CroissantsSection";
import DeliverySection from "./DeliverySection";
import Footer from "./Footer";
import Header from "./Header";
import LocationSection from "./LocationSection";

export default function Home() {
  return (
    <>
      <Header/>
      <CoffeeSection/>
      <CroissantsSection/>
      <DeliverySection/>
      <AboutSection/>
      <LocationSection/>
      <Footer/>
    </>
  );
}
