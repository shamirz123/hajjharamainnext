import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../../../public/data.json";



const Packages = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row col-p20">
            {data?.packages?.items?.map((item) => (
              <div className="col-sm-6 col-md-4 xs-box3 mb-3" key={item?.id}>
                <div className="box-services-6">
                  <Image
                    src={item?.image}
                    className="br2 responsive-image"
                    alt={`Image Service ${item?.title}`}
                    width={200}
                    height={200}
                  />
                  <h3 className="title-uppercased br-bottom">{item?.title}</h3>

                  <p>{item?.details}</p>
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
