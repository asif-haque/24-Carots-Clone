import React, { useState } from "react";
import "./backToTop.css";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  window.onscroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setShow(true);
    } else setShow(false);
  };
  return (
    <div className={`${show ? `showTop` : `hideTop`} fixed bottom-0 left-1/2`}>
      <a
        href="#"
        className="bg-green-900 px-3 lg:px-5 py-2 rounded-t-3xl text-white text-sm"
      >
        BACK TO TOP
      </a>
    </div>
  );
}
