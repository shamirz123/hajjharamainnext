import Image from "next/image";
import Link from "next/link";
import React from "react";

const packages = [
  {
    id: 1,
    image: "/assets/images/demo/p05.jpg",
    title: "Responsive Layout",
    description: "Clean and easy to use",
    details:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.",
  },
  {
    id: 2,
    image: "/assets/images/demo/p12.jpg",
    title: "Bootstrap Based",
    description: "Simple and regular",
    details:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.",
  },
  {
    id: 3,
    image: "/assets/images/demo/p09.jpg",
    title: "Detailed Documentation",
    description: "Fully Customizable",
    details:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.",
  },
  {
    id: 4,
    image: "/assets/images/demo/p05.jpg",
    title: "Responsive Layout",
    description: "Clean and easy to use",
    details:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.",
  },
  {
    id: 5,
    image: "/assets/images/demo/p12.jpg",
    title: "Bootstrap Based",
    description: "Simple and regular",
    details:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.",
  },
  {
    id: 6,
    image: "/assets/images/demo/p09.jpg",
    title: "Detailed Documentation",
    description: "Fully Customizable",
    details:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.",
  },
];

const Packages = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row col-p20">
            {packages.map((pack) => (
              <div className="col-sm-6 col-md-4 xs-box3 mb-3" key={pack?.id}>
                <div className="box-services-6">
                  <img
                    src={pack?.image}
                    className="br2 responsive-image"
                    alt={`Image Service ${pack?.title}`}
                    width={200}
                    height={200}
                  />
                  <h3 className="title-uppercased br-bottom">{pack?.title}</h3>

                  <p>{pack?.details}</p>
                  <Link href="#" className="read-more">
                    read more <div className="icon arrow_carrot-2right"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container ">
          <div className="package-page-content">
            <h1 className="title-large mb20 text-center">Our Plan</h1>
            <div className="br-bottom-center mb30"></div>
            <p className="text-1 text-center">
              and I assure you that you do — get ready for a journey that’s
              certain to, if not buy you more time, show you how to make the
              absolute most of the 24 hours in your day
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-sm-6 col-md-4 sm-box">
              <div className="plan plan-basic">
                <div className="plan-header">
                  <h3 className="plan-price">
                    <span className="plan-curency">$</span>49
                    <span className="plan-period">/ month</span>
                  </h3>
                  <h2 className="plan-title">Basic</h2>
                  <div className="br-bottom-center" />
                </div>
                <div className="">
                  <ul className="plan-features">
                    <li>Predefined Responses</li>
                    <li>Screencasting</li>
                    <li className="plan-feature-off">Business Hours</li>
                    <li className="plan-feature-off">Multiple Ticket forms</li>
                    <li className="plan-feature-off">
                      Business rules analysis
                    </li>
                    <li className="plan-feature-off">
                      Automated Ticket Sharing
                    </li>
                  </ul>
                </div>
                <a href="#" className="btn-e">
                  sign up
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 sm-box">
              <div className="plan plan-professional">
                <div className="plan-featured-overlay" />
                <div className="plan-featured">
                  <i className="icon icon_star" />
                </div>
                <div className="plan-header">
                  <h3 className="plan-price">
                    <span className="plan-curency">$</span>69
                    <span className="plan-period">/ month</span>
                  </h3>
                  <h2 className="plan-title">Professional</h2>
                  <div className="br-bottom-center" />
                </div>
                <div className="">
                  <ul className="plan-features">
                    <li>Predefined Responses</li>
                    <li>Screencasting</li>
                    <li>Business Hours</li>
                    <li>Multiple Ticket forms</li>
                    <li className="plan-feature-off">
                      Business rules analysis
                    </li>
                    <li className="plan-feature-off">
                      Automated Ticket Sharing
                    </li>
                  </ul>
                </div>
                <a href="#" className="btn-e">
                  30 days free trial
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="plan plan-enterprise">
                <div className="plan-header">
                  <h3 className="plan-price">
                    <span className="plan-curency">$</span>99
                    <span className="plan-period">/ month</span>
                  </h3>
                  <h2 className="plan-title">Enterprise</h2>
                  <div className="br-bottom-center" />
                </div>
                <div className="">
                  <ul className="plan-features">
                    <li>Predefined Responses</li>
                    <li>Screencasting</li>
                    <li>Business Hours</li>
                    <li>Multiple Ticket forms</li>
                    <li>Business rules analysis</li>
                    <li className="plan-feature-off">
                      Automated Ticket Sharing
                    </li>
                  </ul>
                </div>
                <a href="#" className="btn-e">
                  sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
