"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { RiPinterestFill } from "react-icons/ri";
import Offcanvas from "react-bootstrap/Offcanvas";

interface SecondaryNavbarProps {
  heading: string;
  breadcrumbs: string[]; // Add breadcrumbs here
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

const socialLinks = [
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaGooglePlusG />, url: "#" },
  { icon: <RiPinterestFill />, url: "#" },
  { icon: <FaLinkedinIn />, url: "#" },
];

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Packages", path: "/packages" },
  { name: "Serviced Countries", path: "/serviced-countries" },
  { name: "Apply Now", path: "/apply-now" },
  {
    name: "About Us",
    path: "/about-us",
    submenu: [
      { name: "The Journey", path: "/about-us//journey" },
      { name: "Hajj Guide", path: "/about-us//hajjguide" },
    ],
  },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contactus" },
];

const languageOptions: Language[] = [
  {
    code: "en",
    name: "English",
    flag: "/assets/images/flag_england.png",
  },
  {
    code: "ar",
    name: "Arabic",
    flag: "/assets/images/saudi-arabia.png",
  },
];

const SecondaryNavbar: React.FC<SecondaryNavbarProps> = ({
  heading,
  breadcrumbs,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]); // Default to English
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible); // Toggle the visibility
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
      setFadeOut(false);
    } else {
      setIsScrolled(false);
      setFadeOut(true);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 992) {
      setIsNavVisible(false);
    }
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`inner-Banner-wrapper ${isScrolled ? "scrolled" : ""} `}>
      <div className="container">
        <div className="bg-overlay gradient-1"></div>
        <div
          className={`topbar  d-none d-lg-block ${isScrolled ? "hidden" : ""}`}
        >
          <div className="main-header">
            <div className="container">
              <div className="row">
                <div className="col-sm-7">
                  <div className="d-flex flex-row text-2">
                    <div className="">
                      <IoLocation className="icon" />
                      <span className="mb-0">Los Angeles 2200 Avenue</span>
                    </div>
                    <div className="call-icon">
                      <IoIosCall className="icon" />
                      <span className="mb-0">0 555 255 444</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div
                    className="clearfix"
                    style={{
                      marginRight: "14px",
                    }}
                  >
                    <div className="pull-right">
                      <div className="clearfix">
                        <ul className="social-icon social-light">
                          {socialLinks.map((link, index) => (
                            <li key={index}>
                              <a href={link.url}>
                                <div className="icon">{link.icon}</div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header
          className={`  header-wrapper inner-banner-top ${
            isScrolled ? "sticky" : ""
          } ${fadeOut ? "inner-fade-out" : ""} `}
        >
          <div className="main-header">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="menu-wrapper">
                    <div className="main-navbar">
                      <div className="logo-wrapper">
                        <a href="index.html" className="logo">
                          <img
                            src="/assets/images/website-logo.svg"
                            className="logo-img logo-light"
                            alt="Logo"
                          />
                        </a>
                      </div>

                      <div className="">
                        <div
                          className="hamburger d-block d-lg-none"
                          onClick={toggleNav}
                        >
                          <GiHamburgerMenu />
                        </div>
                      </div>
                      <nav className="navbar-right">
                        <ul
                          className={`menu ${
                            isNavVisible ? "visible" : "hidden"
                          }`}
                        >
                          {/* Toggle Menu - For Mobile Devices */}
                          <li className="toggle-menu">
                            {" "}
                            <i className="icon icon_menu" />
                          </li>
                          {menuItems.map((item, index) => (
                            <li key={index}>
                              <Link href={item.path}>{item.name}</Link>
                              {item.submenu && (
                                <ul className="submenu">
                                  {item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link href={subItem.path}>
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}

                          <li className="li-icon li-language">
                            <a href="#">
                              <img
                                src={selectedLanguage.flag}
                                alt={selectedLanguage.name}
                                width={16}
                                height={16}
                                className="img-language"
                              />
                              <span className="li-visible-mobile">
                                Language
                              </span>
                            </a>
                            <ul className="submenu menu-languages right">
                              {languageOptions.map((language) => (
                                <li key={language.code}>
                                  <a
                                    href="#"
                                    onClick={() =>
                                      handleLanguageChange(language)
                                    }
                                  >
                                    <img
                                      src={language.flag}
                                      alt={language.name}
                                      width={16}
                                      height={16}
                                      className="img-language"
                                    />
                                    {language.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>

                          <li className="d-none d-lg-inline-block desktop-menu-icon">
                            <Link href="#">
                              <GiHamburgerMenu
                                onClick={handleShow}
                                className="menu-icon"
                                style={{ cursor: "pointer" }}
                              />
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="inner-banner-content">
          <h1>{heading}</h1>

          <div className="inner-banner-breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                <Link
                  href="#"
                  className={index === breadcrumbs.length - 1 ? "active" : ""}
                >
                  {crumb}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="separator"> / </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Offcanvas
          show={show}
          onHide={handleClose}
          placement="start"
          className="offcanvas-background offcanvas-custom-width"
        >
          <Offcanvas.Body>
            <div className="offcanvas-bg">
              <div className="bg-overlay gradient-4" />

              <button
                className="custom-close-btn"
                onClick={handleClose}
                aria-label="Close"
              >
                &times;
              </button>

              {/* Relative: mandatory class */}
              <div className="relative">
                <div className="br-bottom mt0 mb40" />
                <div className="vertical-menu">
                  <div className="panel-group" id="toggle">
                    <div className="panel ">
                      {menuItems.map((item, index) => (
                        <li className="panel-title" key={index}>
                          <Link href={item.path}>{item.name}</Link>
                          {item.submenu && (
                            <ul className="submenu">
                              {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link href={subItem.path}>
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="br-bottom mt50 mb50" />
                <div className="">
                  <ul className="social-icon social-light">
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.url}>
                          <div className="icon">{link.icon}</div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
    </div>
  );
};

export default SecondaryNavbar;
