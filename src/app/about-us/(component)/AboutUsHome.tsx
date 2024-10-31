"use client";
import React, { useState } from "react";
import { CiGift } from "react-icons/ci";
import CountUp from "react-countup";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import { Tab, Tabs } from "react-bootstrap";
import AboutUsTeam from "./AboutUsTeam";
import Clients from "./Client";
import AboutServices from "./AboutUsServices";

function AboutUsHome() {
  // Define the active tab state
  const [activeKey, setActiveKey] = useState("about");
  const [fadeClass, setFadeClass] = useState("");

  const handleTabChange = (k: string) => {
    setFadeClass(""); // Reset fade class
    setActiveKey(k); // Change tab
    setTimeout(() => {
      setFadeClass("fade-in"); // Apply fade-in class after tab content updates
    }, 50); // Slight delay to ensure the class is applied after content change
  };

  return (
    <div>
      <div className="simple-hr mt0"></div>

      <div className="container container-area">
        <div className="row">
          <div className="col-sm-12">
            <section
              className="section-intro bg-img about-page-image stellar"
              data-stellar-background-ratio="0.4"
            >
              <div className="bg-overlay gradient-1"></div>
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="intro-title mb20">about us</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-breadcrumbs">
                    <a href="#">home</a> <span className="separator"> / </span>{" "}
                    <a href="#">pages</a> <span className="separator"> / </span>{" "}
                    <a href="#" className="active">
                      about us
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Row for Tabs */}
        <div className="row mt-5">
          {/* Column for Tab Titles */}
          <div className="col-lg-3 col-md-3 col-sm-12 ">
            <Tabs
              activeKey={activeKey}
              onSelect={(k) => k && handleTabChange(k)}
              className="flex-column nav nav-tabs vertical"
            >
              <Tab eventKey="about" title="About"></Tab>
              <Tab eventKey="team" title="Team"></Tab>
              <Tab eventKey="clients" title="Clients"></Tab>
              <Tab eventKey="services" title="Services"></Tab>
            </Tabs>
            <div className="hidden-xs hidden-sm">
              <div className="sidebar-widget ">
                <h3 className="sidebar-title">Latest Tweets</h3>
                <div className="sidebar-tweet  mb0">
                  <a href="#" className="tweet-user">
                    @shiftThemes
                  </a>
                  <small>22 hours ago</small>
                  <p className="tweet-content">
                    There is a reason why I advise you to plug in your personal
                    commitments first when filling in your time-blocking
                    schedule.
                  </p>
                  <i className="icon social_twitter"></i>
                </div>
              </div>
              <div className="sidebar-widget">
                <h3 className="sidebar-title">Get social</h3>
                <ul className="sidebar-socials">
                  <li>
                    <a href="#">
                      <FaTwitter className="icon social_twitter" /> Follow us
                    </a>{" "}
                    <span>450 Followers</span>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebookF className="icon social_facebook" /> Like us
                    </a>{" "}
                    <span>725 Likes</span>
                  </li>
                  <li>
                    <a href="#">
                      <FaGooglePlusG className="icon social_googleplus" />{" "}
                      Circle us
                    </a>{" "}
                    <span>300 Circles</span>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram className="icon social_instagram" /> Follow
                    </a>{" "}
                    <span>380 Followers</span>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h3 className="sidebar-title">Get in touch</h3>
                <address className="contact-widget">
                  <p>
                    <IoLocation className="icon icon_pin_alt" /> Los Angeles
                    2200 Avenue
                  </p>
                  <p>
                    <IoMail className="icon icon_mail_alt" />{" "}
                    office@shiftThemes.com
                  </p>
                  <p>
                    <IoCall className="icon icon_phone" /> 0 555 255 444
                  </p>
                </address>
              </div>
            </div>
          </div>

          {/* Column for Tab Content */}
          <div className=" col-lg-9 col-md-9 col-sm-12">
            <div className={`tab-content ${fadeClass}`}>
              {activeKey === "about" && (
                <div>
                  <h3 className="title-small">What about us?</h3>
                  <div className="br-bottom mb30"></div>
                  <h4 className="title-small">Hajj Haramain</h4>
                  <p className="text-1 pb-3">
                    Was founded with a deep sense of purpose and dedication to
                    assisting pilgrims as they embark on one of life’s most
                    sacred journeys. We recognize that the Hajj and Umrah
                    pilgrimages are not merely travels but profound experiences
                    of faith and devotion. At Hajjharamain, one of the best
                    travel agency in Dubai for Hajj and Umrah, we are honored to
                    support our pilgrims in every way possible, making their
                    spiritual experience both seamless and memorable.
                  </p>

                  <div className="mb70"></div>

                  <div className="row">
                    <div className="col-sm-12 col-md-5 sm-box3">
                      <h3 className="title-a">Our Achievements</h3>
                      <ul className="list-2">
                        <li>
                          <span>2011</span> Best Sales Award
                        </li>
                        <li>
                          <span>2011</span> Customer Service Award
                        </li>
                        <li>
                          <span>2013</span> Employee-of-the Month Award
                        </li>
                        <li>
                          <span>2015</span> Quality Award and Safety Award
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <h3 className="title-a">Our Skills</h3>
                      <div className="progress no-anim">
                        <div className="progress-bar" data-percentage="85">
                          <span>Wordpress 85%</span>
                        </div>
                      </div>
                      <div className="progress no-anim">
                        <div className="progress-bar" data-percentage="70">
                          <span>Drupal 70%</span>
                        </div>
                      </div>
                      <div className="progress no-anim">
                        <div className="progress-bar" data-percentage="100">
                          <span>HTML 100%</span>
                        </div>
                      </div>
                      <div className="progress no-anim">
                        <div className="progress-bar" data-percentage="95">
                          <span>CSS3 95%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="simple-hr"></div>

                  <div className="row stats-section">
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-4 xs-box">
                          <div className="stats-content">
                            <div className="icon">
                              <CiGift />
                            </div>
                            <CountUp
                              className="stats-timer"
                              start={0}
                              end={123}
                              duration={4}
                            />
                            <div className="br-bottom-center"></div>
                            <h3>Web Projects</h3>
                          </div>
                        </div>
                        <div className="col-sm-4 xs-box">
                          <div className="stats-content">
                            <div className="icon">
                              <CiGift />
                            </div>
                            <CountUp
                              className="stats-timer"
                              start={0}
                              end={1850}
                              duration={4}
                            />
                            <div className="br-bottom-center"></div>
                            <h3>Happy Customers</h3>
                          </div>
                        </div>
                        <div className="col-sm-4 xs-box">
                          <div className="stats-content">
                            <div className="icon">
                              <CiGift />
                            </div>
                            <CountUp
                              className="stats-timer"
                              start={0}
                              end={1768}
                              duration={4}
                            />
                            <div className="br-bottom-center"></div>
                            <h3>Support Tickets</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="simple-hr mt30 mb60"></div>

                  <div className="row">
                    <div className="col-sm-5 xs-box">
                      <div className="mb40"></div>
                      <h3 className="title-a">Our Office</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis dolorum repudiandae eum amet modi
                        consectetur quasi harum rerum nobis inventore?
                      </p>
                      <div className="br-bottom mb30 mt30"></div>
                      <p className="text-2">
                        <a href="#" className="a-inherit">
                          London (U.K.)
                        </a>
                      </p>
                      <p className="text-2">
                        <a href="#" className="a-inherit">
                          Los Angeles (U.S.A.)
                        </a>
                      </p>
                    </div>
                    {/* <div className="col-sm-7">
                      <AboutUsCarousel />
                    </div> */}
                  </div>
                </div>
              )}
              {activeKey === "team" && (
                <div>
                  <AboutUsTeam />
                </div>
              )}

              {activeKey === "clients" && (
                <div>
                  <Clients />
                </div>
              )}
              {activeKey === "services" && (
                <div>
                  <AboutServices />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHome;
