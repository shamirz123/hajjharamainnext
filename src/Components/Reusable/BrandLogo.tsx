import Image from "next/image";
import React from "react";

const BrandLogos = () => {
  return (
    <section className="section section-clients section-clients-b brand-logo-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 sm-box">
            <a href="#">
              <Image
                src="/assets/images/demo/certifiedLogo1.webp"
                alt="client"
                width={160}
                height={60}
              />
            </a>
          </div>
          <div className="col-sm-6 col-md-3 sm-box">
            <a href="#">
              <Image
                src="/assets/images/demo/certifiedLogo2.webp"
                alt="client"
                width={160}
                height={60}
              />
            </a>
          </div>
          <div className="col-sm-6 col-md-3 xs-box">
            <a href="#">
              <Image
                src="/assets/images/demo/certifiedLogo3.webp"
                alt="client"
                width={160}
                height={60}
              />
            </a>
          </div>
          <div className="col-sm-6 col-md-3">
            <a href="#">
              <Image
                src="/assets/images/demo/certifiedLogo4.webp"
                alt="client"
                width={160}
                height={60}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
