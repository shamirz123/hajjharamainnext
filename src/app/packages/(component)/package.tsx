import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart4, BsClipboard2DataFill, BsWechat } from "react-icons/bs";
import { FaImage, FaSwatchbook } from "react-icons/fa";
import { ImLifebuoy } from "react-icons/im";
import { IoImagesOutline, IoPricetagsOutline } from "react-icons/io5";
import { RiLifebuoyLine } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";

// Sample data for services
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
];

const Packages = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row col-p20">
            {packages.map((pack) => (
              <div className="col-sm-6 col-md-4 xs-box3" key={pack?.id}>
                <div className="box-services-6">
                  <Image
                    src={pack?.image}
                    className="br2"
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
        <div className="d-flex flex-column flex-lg-row p-4 mb-3 full-width-container">
          <div className="flex-grow-1 w-100 d-none d-lg-block">
            <iframe
              src="https://player.vimeo.com/video/39822385"
              className="full-width-video"
              frameBorder="0"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
          <div className="container">
            <div className="p-4 package-content">
              <div className="get-height">
                <h3 className="title-medium">Watch the presentation</h3>
                <div className="br-bottom mb-3"></div>
                <p className="mb-4">
                  The European languages are members of the same family. Their
                  separate existence is a myth. For science, music, sport, etc,
                  Europe uses the same vocabulary. The languages only differ in
                  their grammar, their pronunciation and their most common
                  words.
                </p>
                <h3 className="title-medium"> Uncountable shortcodes </h3>
                <p className="mb-0">
                  If several languages coalesce, the grammar of the resulting
                  language is more simple and regular than that of the
                  individual languages. The new common language will be more
                  simple and regular.
                </p>
                <div className="br-bottom mb-3"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 sm-box">
              <div className="box-services-2">
                <div className="box-left">
                  <div className="icon icon-3">
                    <BsClipboard2DataFill />
                  </div>
                </div>
                <div className="box-right">
                  <h3 className="title-small">SEO Optimized</h3>
                  <p>
                    To an English person, it will seem like simplified English,
                    as a skeptical Cambridge friend of mine told me what
                    Occidental is.
                  </p>
                  <div className="br-bottom" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="box-services-2">
                <div className="box-left">
                  <div className="icon icon-3">
                    <ImLifebuoy />
                  </div>
                </div>
                <div className="box-right">
                  <h3 className="title-small">Top Notch Support</h3>
                  <p>
                    To an English person, it will seem like simplified English,
                    as a skeptical Cambridge friend of mine told me what
                    Occidental is.
                  </p>
                  <div className="br-bottom" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb50" />
          <div className="row">
            <div className="col-sm-12 col-md-6 sm-box">
              <div className="box-services-2">
                <div className="box-left">
                  <div className="icon icon-3">
                    <IoImagesOutline />
                  </div>
                </div>
                <div className="box-right">
                  <h3 className="title-small">Unlimited skins</h3>
                  <p>
                    To an English person, it will seem like simplified English,
                    as a skeptical Cambridge friend of mine told me what
                    Occidental is.
                  </p>
                  <div className="br-bottom" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="box-services-2">
                <div className="box-left">
                  <div className="icon icon-3">
                    <IoPricetagsOutline />
                  </div>
                </div>
                <div className="box-right">
                  <h3 className="title-small">Reusable code</h3>
                  <p>
                    To an English person, it will seem like simplified English,
                    as a skeptical Cambridge friend of mine told me what
                    Occidental is.
                  </p>
                  <div className="br-bottom" />
                </div>
              </div>
            </div>
          </div>

          <div className="row section ">
            <div className="col-sm-12 col-md-4">
              <div className="box-services-4 el_max_height">
                <div className="bg-overlay" />
                <div className="row col-p0">
                  <div className="col-sm-12">
                    <h3 className="title title-medium">Customizable</h3>
                    <p className="mb0 ">
                      If several languages coalesce, the grammar of the
                      resulting language is more simple and regular than that of
                      the individual languages.
                    </p>
                  </div>
                </div>
                <span className="icon montserrat">1</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box-services-4 dark el_max_height">
                <div className="bg-overlay" />
                <div className="row col-p0">
                  <div className="col-sm-12">
                    <h3 className="title title-medium">Easy to use</h3>
                    <p className="mb0 ">
                      If several languages coalesce, the grammar of the
                      resulting language is more simple and regular than that of
                      the individual languages.
                    </p>
                  </div>
                </div>
                <span className="icon montserrat">2</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="box-services-4 blue el_max_height">
                <div className="bg-overlay" />
                <div className="row col-p0">
                  <div className="col-sm-12">
                    <h3 className="title title-medium">Clean code</h3>
                    <p className="mb0 ">
                      If several languages coalesce, the grammar of the
                      resulting language is more simple and regular than that of
                      the individual languages.
                    </p>
                  </div>
                </div>
                <span className="icon montserrat">3</span>
              </div>
            </div>
          </div>
          {/* <div className="shadow3" /> */}
        </div>

        <div className="row">
          <div className="col-lg-1 d-none d-lg-block"></div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="mb50 mt50">
              <h3 className="title-medium">Single Service</h3>
              <div className="br-bottom mb20" />
              <p className="mb50">
                The European languages are members of the same family. Their
                separate existence is a myth. For science, music, sport, etc,
                Europe uses the same vocabulary. The languages only differ in
                their grammar, their pronunciation and their most common words.
              </p>
              <h3 className="title-small">
                <i className="fa-style5 icon_table mr10" /> Masonry / Grid
                layouts
              </h3>
              <p>
                If several languages coalesce, the grammar of the resulting
                language is more simple and regular than that of the individual
                languages. The new common language will be more simple and
                regular.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-md-offset-6 d-none d-lg-block">
            <div
              className=" p0 bg-img bg02 stellar"
              data-stellar-background-ratio="0.4"
            >
              <div className="bg-overlay gradient-2"></div>
              <div className="set-height"></div>
            </div>
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
          <div className="section">
            <div className="row">
              <div className="col-sm-12 col-md-5 sm-box3">
                <div className="mt50" />
                <h3 className="title-uppercased">Ajax working contact form</h3>
                <div className="br-bottom mb30" />
                <p>
                  Everyone realizes why a new common language would be
                  desirable: one could refuse to pay expensive translators for
                  themselves.
                </p>
                <div className="mb40" />
                <a href="#" className="btn-bg btn-3d btn-subtext">
                  <span>Start your free trial</span>
                  <small>30 days and no credit card required</small>
                </a>
              </div>
              <div className="col-sm-12 col-md-7">
                <div className="section-dark section-boxed br4">
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="title-uppercased color-on-dark br-left mb30">
                        Responsive Design
                      </h3>
                      <p className="color-on-dark">
                        It will be as simple as Occidental; in fact, it will be
                        Occidental. To an English person, it will seem like
                        simplified English, as a skeptical Cambridge friend of
                        mine told me what Occidental is. The European languages
                        are members of the same family.
                      </p>
                      <div className="mb30" />
                      <div className="color-on-dark mb-3">
                        <div className="d-flex flex-row align-items-center">
                          <div className="icon color-main mr20">
                            <BsCart4 />
                          </div>
                          <div>
                            <p className="m-0"> E-Commerce Templates</p>
                          </div>
                        </div>
                      </div>
                      <div className="color-on-dark mb-3">
                        <div className="d-flex flex-row align-items-center">
                          <div className="icon color-main mr20">
                            <TiHomeOutline />
                          </div>
                          <div>
                            <p className="m-0"> One Page Version</p>
                          </div>
                        </div>
                      </div>
                      <div className="color-on-dark mb-3">
                        <div className="d-flex flex-row align-items-center">
                          <div className="icon color-main mr20">
                            <FaImage />
                          </div>
                          <div>
                            <p className="m-0">
                              {" "}
                              Uncountable Portfolio Templates
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-bg mb0 with-btn-bottom section-large bg-pattern stellar bg04"
        data-stellar-background-ratio="0.4"
      >
        <div className="bg-overlay gradient-1" />
        <div className="container">
          <div className="package-page-content mt-5">
            <h2 className="title-large mb20 text-center color-on-img">
              If that simple fact seems a bit discouraging
            </h2>
            <h3 className="text-1 text-center color-on-img">
              you may not have the power to get yourself more time, but you do
              have the power to make the most of it
            </h3>
          </div>
        </div>
        <a href="#" className="btn-bottom">
          Get a quote
        </a>
      </div>
      <div className="shadow3" />
      <div className="mb50" />

      <div>
        <div className="section">
          <div className="container">
            <div className="row col-p30">
              <div className="col-sm-6 col-md-4 sm-box">
                <div className="box-services-6">
                  <div className="mb10 pt5" />
                  <div className="box-services-2 box-services-2a">
                    <div className="icon icon-2 ">
                      <RiLifebuoyLine />
                    </div>
                    <h3 className="title-small">Support Forum</h3>
                    <div className="br-bottom-center mb20" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Enim temporibus quae!
                    </p>
                    <a href="#" className="read-more">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 sm-box">
                <div className="box-services-6">
                  <div className="mb10 pt5" />
                  <div className="box-services-2 box-services-2a">
                    <div className="icon icon-2">
                      <FaSwatchbook />
                    </div>
                    <h3 className="title-small">Knowledgebase</h3>
                    <div className="br-bottom-center mb20" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Enim temporibus quae!
                    </p>
                    <a href="#" className="read-more">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 xs-box3">
                <div className="box-services-6">
                  <div className="mb10 pt5" />
                  <div className="box-services-2 box-services-2a">
                    <div className="icon icon-2">
                      <BsWechat />
                    </div>
                    <h3 className="title-small">Live Chat</h3>
                    <div className="br-bottom-center mb20" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Enim temporibus quae!
                    </p>
                    <a href="#" className="read-more">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb50" />
      </div>
    </>
  );
};

export default Packages;
