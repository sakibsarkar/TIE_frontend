import DisplayProductCards from "@/components/UI/DisplayProductCard";
import Hero from "@/components/homePage/Hero";
import PaymentMethod from "@/components/homePage/PaymentMethod";
import Promotion from "@/components/homePage/Prmotion";
import ContactUs from "@/components/shared/ContactUs";

const HomeView = () => {
  return (
    <>
      <Hero />
      <Promotion />
      <DisplayProductCards />
      <ContactUs />

      <PaymentMethod />
    </>
  );
};

export default HomeView;
