import React, { useState } from "react";
import "./navbar.css";

export default function navbar() {
  const [show, setShow] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [clicked, setClicked] = useState(false);
  document.onscroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShow(false);
      // document.querySelector("nav").classList.remove("show");
      // document.querySelector("nav").classList.add("hide");
    } else {
      setShow(true);
      // document.querySelector("nav").classList.remove("hide");
      // document.querySelector("nav").classList.add("show");
    }
  };
  return (
    <>
      <div className="hidden lg:block">
        <nav
          className={`${
            show ? `show` : `hide`
          } fixed z-10 w-full bg-white py-10 lg:flex justify-center gap-10 text-center tracking-widest text-sm`}
        >
          <div className="space-x-10 flex">
            <div
              className="relative"
              onMouseOver={() => setShowAbout(true)}
              onMouseOut={() => setShowAbout(false)}
            >
              <a className="about">ABOUT</a>
              {showAbout && (
                <div className="about-overlay absolute top-7 flex flex-col gap-2 items-start w-40 p-3 rounded-lg">
                  <a href="">About</a>
                  <a href="">Team</a>
                  <a href="">Awards</a>
                  <a href="">Blog</a>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseOver={() => setShowServices(true)}
              onMouseOut={() => setShowServices(false)}
            >
              <a className="about">SERVICES</a>
              {showServices && (
                <div className="about-overlay absolute top-7 flex flex-col gap-2 items-start w-40 p-3 rounded-lg">
                  <a href="">Catering</a>
                  <a href="">Bar Service</a>
                  <a href="">Staffing</a>
                  <a href="">Production</a>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseOver={() => setShowEvents(true)}
              onMouseOut={() => setShowEvents(false)}
            >
              <a className="about">EVENTS</a>
              {showEvents && (
                <div className="about-overlay absolute top-7 flex flex-col gap-2 items-start w-40 p-3 rounded-lg">
                  <a href="">Weddings</a>
                  <a href="">Corporate</a>
                  <a href="">Social</a>
                  <a href="">Gallery</a>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center mx-32 leading-3">
            <a className="text-3xl font-semibold">24 CARROTS</a>
            <a className="text-[10px] text-zinc-400">CATERING AND EVENTS</a>
          </div>
          <div className="space-x-10">
            <a>VENUE</a>
            <a>CAREER</a>
            <a className="bg-red-400 p-1 px-3 text-white rounded-full">
              GET IN TOUCH
            </a>
          </div>
        </nav>
      </div>
      {/* mobile navbar */}
      <div className="block lg:hidden fixed z-10 w-full">
        <nav
          className={`flex justify-center ${
            clicked ? `bg-green-900 text-white` : `bg-white`
          } py-4`}
        >
          <div className="flex flex-col items-center mx-32 leading-3 text-center">
            <a className="text-4xl font-semibold">24 CARROTS</a>
            <a className="text-[10px] text-zinc-400">CATERING AND EVENTS</a>
          </div>
          <button
            className="h-fit absolute right-7"
            onClick={() => setClicked(!clicked)}
          >
            <span className="material-symbols-outlined text-5xl md:4xl ">
              {clicked ? `menu_open` : `menu`}
            </span>
          </button>
        </nav>
        {clicked && (
          <div className="bg-green-900 w-full h-[100vh] flex flex-col items-center gap-5 text-green-200 text-center text-3xl pt-5">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Events</a>
            <a href="">Venues</a>
            <a href="">Careers</a>
            <a href="">Get In Touch</a>
            <div className="text-xs">
              <p>© 2023 24 Carrots Catering & Events.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
