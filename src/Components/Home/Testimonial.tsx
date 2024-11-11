"use client";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [cooldown, setCooldown] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed R",
      title: "Dubai",
      text: "Choosing Hajjharamain was one of the best decisions I made for my Hajj journey. Their team took care of every detail, from accommodation to transportation, allowing me to focus entirely on the spiritual experience. I felt safe, well-guided, and supported throughout the journey. Highly recommended for anyone in the UAE looking for a trusted travel agency!",
    },
    {
      id: 2,
      name: "Fatima A",
      title: "Abu Dhabi",
      text: "As a first-time pilgrim, I was nervous about managing the logistics of Hajj. Hajjharamain made it all so seamless! From the booking process to our daily itinerary, they handled everything professionally and with care. The group leaders were knowledgeable and approachable, making my journey truly memorable. Thank you, Hajjharamain!",
    },
    {
      id: 3,
      name: "Khalid S",
      title: "Sharjah",
      text: "Hajjharamain provided a level of service that far exceeded my expectations. They took care of the smallest details, and their guidance during the rituals was invaluable. It felt like traveling with family. If you’re looking for a Hajj package in the UAE, look no further than Hajjharamain!",
    },
  ];

  const handleSelect = (selectedIndex: number) => {
    if (!cooldown) {
      if (selectedIndex < 0) {
        setIndex(testimonials.length - 1); // Go to last item
      } else if (selectedIndex >= testimonials.length) {
        setIndex(0); // Go back to first item
      } else {
        setIndex(selectedIndex);
      }
      setCooldown(true);
      setTimeout(() => {
        setCooldown(false);
      }, 300);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || cooldown) return;

    const diffX = e.clientX - startX;

    if (diffX > 50) {
      handleSelect(index - 1);
      setStartX(e.clientX);
    } else if (diffX < -50) {
      handleSelect(index + 1);
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto testimonials-wrapper">
            <div
              className="section-testimonials text-center"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => setIsDragging(false)}
              style={{ userSelect: "none" }}
            >
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                // wrap={true} 
              >
                {testimonials.map((testimonial) => (
                  <Carousel.Item key={testimonial.id}>
                    <div className="d-flex flex-column align-items-center testimonial-item custom-cursor">
                      <blockquote>
                        <h5>
                          {testimonial.name} <span>{testimonial.title}</span>
                        </h5>
                        <p>{testimonial.text}</p>
                      </blockquote>
                    </div>
                  </Carousel.Item>
                ))}
                <div className="icon">
                  <RiDoubleQuotesR className="quote-icon" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
