import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Welcome() {
  const images = [
    {
      src: "https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg",
    },
    {
      src: "https://24carrots.com/wp-content/uploads/2023/10/1.2-Holly-Sigafoos-Photo.jpg",
    },
    {
      src: "https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg",
    },
    {
      src: "https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:flex pt-32 main">
      <div className="lg:w-[90%] text-center px-16 space-y-10">
        <h3 className="text-green-900 tracking-widest text-xl font-semibold">
          WELCOME TO 24 CARROTS
        </h3>
        <h1 className="text-green-950 text-5xl lg:text-8xl font-serif">
          Remarkable Catering & Events
        </h1>
        <p>
          24 Carrots is the premier catering and events company of choice in
          Southern California. We create remarkable experiences by offering the
          finest quality foods and providing unsurpassed personalized service,
          driven by our passion for life’s special occasions.
        </p>
        <button className="bg-orange-700 py-1 px-8 mb-5 rounded-full text-white hover:scale-105 transition-all">
          GET IN TOUCH
        </button>
      </div>
      <div className="w-full pl-5">
        {/* carousel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="false"
        >
          <ol className="carousel-indicators hover:cursor-pointer">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner welcome-img overflow-hidden">
            <div className="carousel-item active">
              <img
                className="object-cover h-[80vh]"
                src={images[0].src}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="object-cover h-[80vh] w-full"
                src={images[1].src}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="object-cover h-[80vh] w-full"
                src={images[2].src}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="object-cover h-[80vh] w-full"
                src={images[3].src}
                alt="First slide"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
