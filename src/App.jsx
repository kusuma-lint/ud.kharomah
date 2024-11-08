// import React from 'react'

import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";
import Working from "./sections/Working";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Working />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;