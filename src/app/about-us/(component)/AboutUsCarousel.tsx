import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AboutUsCarousel = () => {
  // const images = [
  //   {
  //     id: 1,
  //     src: "/assets/images/demo/office1.jpg",
  //     alt: "Office 1",
  //   },
  //   {
  //     id: 2,
  //     src: "/assets/images/demo/office2.jpg",
  //     alt: "Office 2",
  //   },
  //   {
  //     id: 3,
  //     src: "/assets/images/demo/office3.jpg",
  //     alt: "Office 3",
  //   },
  // ];

  // const settings = {
  //   autoplay: true,
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplaySpeed: 4000,
  //   pauseOnHover: true,
  // };

  return (
    <div className="owl-shop owl-columns1 mb30 popup-gallery custom-cursor">
      {/* <Slider {...settings}>
        {images.map((image) => (
          <div className="owl-el" key={image.id}>
            <img src={image.src} alt={image.alt} />
            <a
              href={image.src}
              title={image.alt}
              className="init-popup owl-popup"
            >
              <div className="icon ">
                <AiOutlineArrowsAlt />
              </div>
            </a>
          </div>
        ))}
        <div className="icon">
          <RiDoubleQuotesR />
        </div>
      </Slider> */}
    </div>
  );
};

export default AboutUsCarousel;
