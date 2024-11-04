import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function WhatAboutUs() {
  return (
    <>
      <div className="section">
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="about-us-image d-none d-lg-block">
            {/* <img src="/assets/images/demo/bg50.jpg" alt="" /> */}
          </div>
          <div className="">
            <div className="container">
              <div className="what-about-us-content">
                <h3 className="title-medium">Why Choose Hajjharamain?</h3>

                <p className="mb50">
                  Our packages include flights and accommodation which are close
                  to holy sites, transportation on which anyone can rely and
                  feel secure. In Addition to guidance we ensure peace of mind.
                  With our local expertise in Saudi Arabia, we offer flexible
                  options and reliable support for a comfortable journey.
                </p>
                <div>
                  <div className="title-small">
                    <div className="d-flex flex-row">
                      <div className="fa-style5  mr10">
                      <VscWorkspaceTrusted />

                      </div>
                      <div> Trusted Support</div>
                    </div>
                  </div>
                  <p className="mb0">
                    Our expert team of professionals remains in touch with you
                    throughout the whole journey and offers you on-time
                    assistance along with spiritual guidance.
                  </p>
                  <div className="mb40" />
                </div>
               
              </div>
            </div>
            {/* <div className="container">
              <div className="get-height">
                <h3 className="title-medium">Why Choose Hajjharamain?</h3>
                <div className="br-bottom mb20"></div>

                <ul className="reasons-list pl-1">
                  <li>
                    <strong>Comprehensive Package:</strong> Our packages include
                    flights, accommodation close to the holy sites,
                    transportation, and guidance, ensuring peace of mind.
                  </li>
                  <li>
                    <strong>Local Expertise:</strong> With our roots in Dubai,
                    we understand the needs of pilgrims traveling from the UAE
                    and are equipped to provide everything you need for a
                    comfortable journey.
                  </li>
                  <li>
                    <strong>Flexible Options:</strong> Whether you&apos;re looking
                    for a Hajj package from Dubai or simply want assistance with
                    travel arrangements, we have flexible options to meet your
                    schedule.
                  </li>
                  <li>
                    <strong>Trusted Support:</strong> Our team remains with you
                    throughout the journey, offering on-ground assistance and
                    spiritual guidance.
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatAboutUs;
