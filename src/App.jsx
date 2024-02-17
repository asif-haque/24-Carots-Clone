import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import BackToTop from "./components/BackToTop";
import Wedding from "./components/Wedding";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Welcome />
      <Wedding />
      <BackToTop />
    </div>
  );
}
