"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function HomeBanner() {
  const images = [
    "/assets/images/demo/homeImage1.webp",
    "/assets/images/demo/homeImage2.webp",
    "/assets/images/demo/homeImage3.webp",
    "/assets/images/demo/homeImage4.webp",
  ];

  // State to keep track of the active slide
  const [activeIndex, setActiveIndex] = useState(0);

  // Handler to change slide when a thumbnail is clicked
  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <div className="carousel-container">
        <Carousel
          fade
          controls={false} // Disable default arrows
          indicators={false} // Disable default indicators
          activeIndex={activeIndex}
          onSelect={handleSelect}
          interval={10000}
        >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <div
                className="carousel-item-container"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100vh", // Set your desired height
                  width: "100%",
                }}
              >
                {/* Black overlay */}
                <div className="black-overlay"></div>
                <div className="container">
                  <div className="carousel-content">
                    <div className="heading">
                      <h1>
                        Welcome to Hajjharamain Your Trusted Partner for Hajj
                        Packages
                      </h1>
                    </div>
                    <div className="text title-slider">
                      <p className="small">
                        Are you looking for the best travel agency in Dubai to
                        guide you through the spiritual journey of Hajj? At
                        Hajjharamain, we specialize in offering comprehensive
                        Hajj packages from the UAE, ensuring a seamless
                        experience from Dubai to the sacred cities of Makkah and
                        Madinah. With our experienced team and carefully curated
                        services, we stand by your side at every step of this
                        meaningful pilgrimage.
                      </p>
                    </div>
                    <div className="button">
                      <button>Apply now</button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Thumbnails for navigation */}
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleSelect(index)}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
