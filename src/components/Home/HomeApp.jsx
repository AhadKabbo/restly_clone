import React from "react";
import HeaderIndex from "../Header/HeaderIndex";
import NavbarIndex from "../Navbar/NavbarIndex";
import HeroIndex from "../Hero/HeroIndex";
import AboutIndex from "../About/AboutIndex";
import ServiceIndex from "../Service/ServiceIndex";
import OurGallery from "../OurGallery/OurGalleryIndex";
import ExpertTeamIndex from "../ExpertTeam/ExpertTeamIndex";
import PricingIndex from "../Pricing/PricingIndex";
import BlogIndex from "../Blog/BlogIndex";
import FooterIndex from "../Footer/FooterIndex";

const HomeApp = () => {
  return (
    <>
      <HeaderIndex />
      <NavbarIndex />
      <HeroIndex />
      <AboutIndex />
      <ServiceIndex />
      <OurGallery />
      <ExpertTeamIndex />
      <PricingIndex />
      <BlogIndex />
      <FooterIndex />
    </>
  );
};

export default HomeApp;
