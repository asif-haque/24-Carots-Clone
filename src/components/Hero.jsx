import React from "react";

export default function Hero() {
  return (
    <section className="hero relative w-full pt-24 text-center" id="hero">
      <video
        autoPlay
        loop
        muted
        className="hero-video w-full h-full object-cover"
      >
        <source src="/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="absolute text-white text-3xl lg:text-8xl flex flex-col items-center justify-center inset-0 font-serif">
        Simply the Finest
      </h1>
    </section>
  );
}
