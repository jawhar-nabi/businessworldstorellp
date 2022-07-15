import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {t('home_welcome')}
      <Hero className="illustration-section-01" />
      <FeaturesTiles id="solutions" />
      <FeaturesSplit
        id="experts"
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider id="testimonials" />
      <Cta split />
    </>
  );
};

export default Home;
