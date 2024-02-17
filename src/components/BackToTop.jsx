import React, { useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  window.onscroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setShow(true);
    } else setShow(false);
  };
  return show ? (
    <div className="fixed bottom-0 left-1/2 [transform:translate(-50%,0)]">
      <a
        href="#hero"
        className="bg-emerald-600 px-3 lg:px-5 py-1 rounded-t-3xl text-white"
      >
        BACK TO TOP
      </a>
    </div>
  ) : null;
}
