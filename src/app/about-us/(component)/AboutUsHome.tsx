"use client";
import React, { useState } from "react";

function AboutUsHome() {
  const [activeSection, setActiveSection] = useState("hajj");

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  // Scroll to section by ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="container container-area">
        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="flex-column nav nav-tabs vertical">
              <h3
                className={`about-us-left-bar-heading ${
                  activeSection === "hajj" ? "active" : ""
                }`}
                onClick={() => handleScrollToSection("hajj")}
              >
                Hajj Haramain
              </h3>
              <h3
                className={`about-us-left-bar-heading ${
                  activeSection === "vision" ? "active" : ""
                }`}
                onClick={() => handleScrollToSection("vision")}
              >
                Our Vision
              </h3>
              <h3
                className={`about-us-left-bar-heading ${
                  activeSection === "story" ? "active" : ""
                }`}
                onClick={() => handleScrollToSection("story")}
              >
                Our Story
              </h3>
              <h3
                className={`about-us-left-bar-heading ${
                  activeSection === "offer" ? "active" : ""
                }`}
                onClick={() => handleScrollToSection("offer")}
              >
                What We Offer
              </h3>
              <h3
                className={`about-us-left-bar-heading ${
                  activeSection === "difference" ? "active" : ""
                }`}
                onClick={() => handleScrollToSection("difference")}
              >
                Our Difference
              </h3>
              <h3
                className={`about-us-left-bar-heading ${activeSection === "why" ? "active" : ""}`}
                onClick={() => handleScrollToSection("why")}
              >
                Why Hajjharamain?
              </h3>
              <h3
                className={`about-us-left-bar-heading ${
                  activeSection === "journey" ? "active" : ""
                }`}
                onClick={() => handleScrollToSection("journey")}
              >
                Let’s Begin Your Journey Together
              </h3>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div>
              <h3 className="title-small">What about us?</h3>
              <div className="br-bottom mb30"></div>
              <section id="hajj">
                <h4 className="title-small">Hajj Haramain</h4>
                <p className="text-1 pb-3">
                  was founded with a deep sense of purpose and dedication to
                  assisting pilgrims as they embark on one of life’s most sacred
                  journeys. We recognize that the Hajj and Umrah pilgrimages are
                  not merely travels but profound experiences of faith and
                  devotion. At Hajjharamain, one of the best travel agency in
                  Dubai for Hajj and Umrah, we are honored to support our
                  pilgrims in every way possible, making their spiritual
                  experience both seamless and memorable.
                </p>
              </section>

              <div className="mb70"></div>

              <section id="vision">
                <h3 className="title-a">Our Vision</h3>
                <p className="text-1 pb-3">
                  Our vision is to be more than a travel provider; we aspire to
                  be a trusted companion on your pilgrimage, offering the
                  support and resources needed to focus solely on the spiritual
                  aspects of Hajj and Umrah. As a top travel agency in Dubai, we
                  aim to create a journey where every pilgrim feels respected,
                  valued, and well-cared-for from the moment they leave their
                  home until they return.
                </p>
              </section>

              <div className="mb70"></div>

              <section id="story">
                <h3 className="title-a">Our Story</h3>
                <p className="text-1 pb-3">
                  Hajjharamain was established by a group of passionate
                  individuals with a shared commitment to serving the Muslim
                  community. With years of experience in the travel industry and
                  a specific focus on Hajj packages and Umrah services, we’ve
                  grown to understand the unique needs and concerns of our
                  pilgrims. Guided by Islamic values, we are proud to offer a
                  trustworthy and compassionate service that handles each aspect
                  of your journey with integrity and excellence.
                </p>
              </section>

              <div className="mb70"></div>

              <section id="offer">
                <h3 className="title-a">What We Offer</h3>
                <p className="text-1 pb-3">
                  Our services are designed with careful attention to every
                  detail, ensuring that each aspect of your pilgrimage is
                  seamlessly managed. We provide:
                </p>
                <ul>
                  <li>
                    <strong>Visa and Travel Arrangements</strong>
                    Hajj and Umrah visas, international flights, and necessary
                    documentation are all handled by our dedicated team, making
                    us a preferred
                  </li>
                  <li>
                    <strong>Accommodation and Comfort</strong>
                    We partner with leading hotels close to the holy sites,
                    offering options that suit various budgets without
                    compromising on comfort.
                  </li>
                  <li>
                    <strong>Guided Pilgrimage Tour</strong>
                    Our experienced guides are knowledgeable and compassionate,
                    helping you understand each step of the pilgrimage and
                    making the journey spiritually enriching.
                  </li>
                  <li>
                    <strong>24/7 On-Ground Support</strong>
                    Our support team is always available to assist with any
                    needs or questions, providing peace of mind so you can focus
                    on your worship.
                  </li>
                  {/* Other list items */}
                </ul>
              </section>

              <div className="mb70"></div>

              <section id="difference">
                <h3 className="title-a">Our Difference</h3>
                <p className="text-1 pb-3">
                  What truly sets Hajjharamain apart is our commitment to
                  personalization and care. We recognize that each pilgrim’s
                  journey is unique, and we take pride in tailoring our services
                  to meet individual requirements, whether it’s special
                  accommodations, accessibility support, or customized Hajj
                  packages. Our team combines professionalism with a sincere
                  passion for service, creating a travel experience that is
                  smooth, spiritually fulfilling, and respectful of Islamic
                  traditions.
                </p>
              </section>

              <div className="mb70"></div>

              <section id="why">
                <h3 className="title-a">Why Hajjharamain?</h3>
                <ul>
                  <li>
                    <strong>Faith-Driven Service</strong>
                    Guided by Islamic values, we strive to serve with
                    compassion, integrity, and respect.
                  </li>
                  <li>
                    <strong>Expert Guidance</strong>
                    Our experienced team is well-versed in Hajj and Umrah
                    requirements and is always ready to provide insightful
                    guidance.
                  </li>
                  <li>
                    <strong>Transparent Pricing</strong>
                    We believe in transparent pricing with no hidden costs, so
                    you can plan your Hajj package from Dubai with clarity and
                    confidence
                  </li>
                  <li>
                    <strong>Enduring Support</strong>
                    From the initial consultation to the final farewell, we
                    remain at your side, ensuring every aspect of your
                    pilgrimage is well-coordinated and supported.
                  </li>
                </ul>
                <p className="text-1 pb-3">
                  At Hajjharamain, we consider it a privilege to assist you in
                  fulfilling this sacred obligation. Our goal is to make every
                  aspect of your pilgrimage as stress-free and meaningful as
                  possible, allowing you to immerse yourself fully in the
                  spiritual experience of Hajj and Umrah. Join us, and let us
                  guide you through a journey that will resonate in your heart
                  forever.
                </p>
              </section>

              <div className="mb70"></div>

              <section id="journey">
                <h3 className="title-a">Let’s Begin Your Journey Together</h3>
                <p className="text-1 pb-3">
                  Discover the difference with Hajjharamain, one of the top
                  travel agencies in Dubai. We’re here to bring peace, comfort,
                  and unparalleled service to your sacred journey
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHome;
