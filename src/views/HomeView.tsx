"use client";
import DisplayProductCards from "@/components/UI/DisplayProductCard";
import Hero from "@/components/homePage/Hero";
import PaymentMethod from "@/components/homePage/PaymentMethod";
import Promotion from "@/components/homePage/Prmotion";
import ContactUs from "@/components/shared/ContactUs";
import { SideBySideMagnifier } from "react-image-magnifiers";
const HomeView = () => {
  return (
    <>
      <Hero />
      <Promotion />
      <DisplayProductCards />
      <PaymentMethod />
      <ContactUs />
    </>
  );
};

export default HomeView;
