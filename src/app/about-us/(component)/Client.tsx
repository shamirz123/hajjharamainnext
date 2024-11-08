import React from "react";
import ClientCarousel from "./ClientCarousel";
import Image from "next/image";

function Clients() {
  return (
    <div>
      <div className="row section-clients">
        <div className="col-sm-4 xs-box">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client01.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className="col-sm-4 xs-box">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client02.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client03.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mb30"></div>
      <div className="row section-clients">
        <div className="col-sm-4 xs-box">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client04.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className="col-sm-4 xs-box">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client05.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client06.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mb30"></div>
      <div className="row section-clients">
        <div className="col-sm-4 xs-box">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client07.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className="col-sm-4 xs-box">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client08.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client03.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mb30"></div>
      <div className="row section-clients">
        <div className="col-sm-4 xs-box">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client01.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className="col-sm-4 xs-box">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client02.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="box-services-6">
            <a href="#">
              <img
                src="/assets/images/demo/client04.png"
                alt="client"
                className="mb0"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mb70"></div>

      <div className="row">
        <div className="col-sm-12">
          <div className="mb50"></div>
          <div className="section-testimonials">
            <div className="owl-carousel owl-columns1">
              <div className="owl-el">
                <blockquote>
                  <h5>
                    Mike Trout <span>ThemeForest</span>
                  </h5>
                  <div className="br-bottom-center mb20"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum, quidem nesciunt totam? Quia, facere nobis fuga.
                    Voluptas, sit maxime accusantium ipsum dolor.
                  </p>
                </blockquote>
              </div>
              <div className="owl-el">
                <blockquote>
                  <h5>
                    Giancarlo Stanton <span>AudioJungle</span>
                  </h5>
                  <div className="br-bottom-center mb20"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum, quidem nesciunt totam? Quia, facere nobis fuga.
                    Voluptas, sit maxime accusantium ipsum dolor.
                  </p>
                </blockquote>
              </div>
              <ClientCarousel />
              {/* <div className="owl-el">
                <blockquote>
                  <h5>
                    Paul Goldschmidt <span>CodeCanyon</span>
                  </h5>
                  <div className="br-bottom-center mb20"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum, quidem nesciunt totam? Quia, facere nobis fuga.
                    Voluptas, sit maxime accusantium ipsum dolor.
                  </p>
                </blockquote>
              </div> */}
            </div>
            <i className="icon icon_quotations"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
