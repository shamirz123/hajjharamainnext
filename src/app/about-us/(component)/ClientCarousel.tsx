import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import Carousel from react-responsive-carousel
import { RiDoubleQuotesR } from "react-icons/ri";

// Import Carousel CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ClientCarousel = () => {
  const clientData = [
    {
      id: 1,
      name: "Paul Goldschmidt",
      title: "CodeCanyon",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quidem nesciunt totam? Quia, facere nobis fuga. Voluptas, sit maxime accusantium ipsum dolor.",
    },
    {
      id: 2,
      name: "Miguel Cabrera",
      title: "Palas",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quidem nesciunt totam? Quia, facere nobis fuga. Voluptas, sit maxime accusantium ipsum dolor.",
    },
    {
      id: 3,
      name: "Adam Jones",
      title: "Voyo",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quidem nesciunt totam? Quia, facere nobis fuga. Voluptas, sit maxime accusantium ipsum dolor.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-testimonials custom-cursor text-center">
          <Carousel
            infiniteLoop
            autoPlay
            interval={3000}
            showThumbs={false}
            showStatus={false}
          >
            {clientData.map((testimonial) => (
              <div key={testimonial.id}>
                <blockquote>
                  <h5>
                    {testimonial.name} <span>{testimonial.title}</span>
                  </h5>
                  <div className="br-bottom-center mb20"></div>
                  <p>{testimonial.text}</p>
                </blockquote>
              </div>
            ))}
          </Carousel>
          <div className="icon">
            <RiDoubleQuotesR />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;