import Image from "next/image";
import React from "react";

const BrandLogos = () => {
  return (
    <section className="section section-clients section-clients-b">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 sm-box">
            <a href="#">
              <Image
                src="/assets/images/demo/client01.png"
                alt="client"
                width={160}
                height={60}
              />
            </a>
          </div>
          <div className="col-sm-6 col-md-3 sm-box">
            <a href="#">
              <Image
                src="/assets/images/demo/client02.png"
                alt="client"
                width={160}
                height={60}
              />
            </a>
          </div>
          <div className="col-sm-6 col-md-3 xs-box">
            <a href="#">
              <Image
                src="/assets/images/demo/client03.png"
                alt="client"
                width={160}
                height={60}
              />
            </a>
          </div>
          <div className="col-sm-6 col-md-3">
            <a href="#">
              <Image
                src="/assets/images/demo/client04.png"
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
