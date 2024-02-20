import React from "react";

export default function Wedding() {
  return (
    <>
      <div className="text-center my-20 lg:hidden">
        <h1 className="text-green-900 font-serif text-5xl px-10">
          Making Every Experience Magical
        </h1>
        <div className="w-[45%] h-96 rounded-full overflow-hidden mx-auto my-10">
          <img
            src="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg"
            alt=""
            className=""
          />
        </div>
        <h1 className="text-green-900 font-serif text-5xl px-10">Weddings</h1>
        <h3 className="text-xl text-green-800 mt-2">EXCEPTIONAL WEDDINGS</h3>
        <p className="text-green-950 my-4">
          The most important day of your life, is ours too. Your wedding should
          be the ultimate celebration of your relationship, and our team of
          experts guide you through the process, offering peace of mind and a
          remarkable experience.
        </p>
        <button className="bg-orange-700 py-1 px-8 rounded-full text-white scale-125">
          Learn More
        </button>
      </div>
      <div className="hidden lg:flex gap-10 my-52 pl-5">
        <div className="w-[60%] rounded-t-full overflow-hidden mx-auto">
          <img
            src="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="w-full pt-20 pl-2">
          <h1 className="text-green-900 font-serif text-7xl mb-5">
            Making Every Experience Magical
          </h1>
          <div className="flex">
            <div className="w-[70%] space-y-2 flex flex-col">
              <h3 className="text-2xl text-green-800">Weddings</h3>
              <a className="text-zinc-400 text-2xl">Social</a>
              <a className="text-zinc-400 text-2xl">Corporate</a>
              <a className="text-zinc-400 text-2xl">Venues</a>
            </div>
            <div className="">
              <h3 className="text-xl text-green-800">
                EXCEPTIONAL WEDDINGS
              </h3>
              <p className="text-green-950 my-4">
                The most important day of your life, is ours too. Your wedding
                should be the ultimate celebration of your relationship, and our
                team of experts guide you through the process, offering peace of
                mind and a remarkable experience.
              </p>
              <button className="mt-10 bg-orange-700 py-1 px-8 rounded-full text-white hover:scale-105 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
