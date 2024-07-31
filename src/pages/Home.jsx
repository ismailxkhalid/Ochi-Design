import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Landing from "../components/home/Landing";
import Marquee from "../components/home/Marquee";
import About from "../components/home/About";
import PlayEyes from "../components/home/PlayEyes";
import FeaturedProjects from "../components/home/FeaturedProjects";
import HoverImageLinks from "../components/home/ClientReviews";
import Cards from "../components/home/Cards";
import PreFooter from "../components/home/PreFooter";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <PlayEyes />
      <FeaturedProjects />
      <HoverImageLinks />
      <Cards />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default Home;
