import React from "react";
import HeaderIndex from "../Header/HeaderIndex";
import NavbarIndex from "../Navbar/NavbarIndex";
import HeroIndex from "../Hero/HeroIndex";
import AboutIndex from "../Pages/About/AboutIndex";
import ServiceIndex from "../Pages/Service/ServiceIndex";
import OurGallery from "../OurGallery/OurGalleryIndex";
import ExpertTeamIndex from "../Pages/ExpertTeam/ExpertTeamIndex";
import PricingIndex from "../Pricing/PricingIndex";
import BlogIndex from "../Pages/Blog/BlogIndex";
import FooterIndex from "../Footer/FooterIndex";

const HomeApp = () => {
  return (
    <>
      <HeroIndex />
      <AboutIndex />
      <ServiceIndex />
      <OurGallery />
      <ExpertTeamIndex />
      <PricingIndex />
      <BlogIndex />
    </>
  );
};

export default HomeApp;
