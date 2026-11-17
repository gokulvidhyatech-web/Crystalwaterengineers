
import React from "react";
import "./Hero.css";

import heroVideo from "../assets/Video/Crystalclear.mp4";

const Hero = () => {
  return (
    <section className="hero-section" id="home">

      <video
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

    </section>
  );
};

export default Hero;
