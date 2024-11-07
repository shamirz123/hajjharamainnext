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
import { Drawer, IconButton } from "@mui/material";

interface Breadcrumbs {
  name: string;
  path: string;
}

interface SecondaryNavbarProps {
  heading: string;
  breadcrumbs: Breadcrumbs[]; // Add breadcrumbs here
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
  {
    name: "Countries",
    path: "/serviced-countries",
    megamenu: [
      {
        title: "Slider Home",
        links: [
          { name: "Full width Slider", path: "index.html" },
          { name: "Full screen Slider", path: "index_03.html" },
          { name: "Video Intro", path: "index_05.html" },
          { name: "Kenburns Slider", path: "index_06.html" },
          { name: "Parallax Slider", path: "index_10.html" },
          { name: "Boxed Slider", path: "index_07.html" },
          { name: "More examples", path: "_sliders.html", badge: "+" },
          { name: "Coming Soon", path: "page_coming_soon.html" },
        ],
      },
      {
        title: "Parallax Home",
        links: [
          { name: "Full width Parallax Image", path: "index_04.html" },
          { name: "Full screen Parallax Image", path: "index_12.html" },
          { name: "Vertical Menu Boxed", path: "index_02.html" },
          { name: "Fixed Vertical Menu", path: "index_09.html" },
          { name: "Push vertical Menu", path: "index_06.html" },
          { name: "More examples", path: "_menus.html", badge: "+" },
        ],
      },
      {
        title: "Header Home",
        links: [
          { name: "Floating Header", path: "index_05.html" },
          { name: "Floating top bar Header", path: "index.html" },
          { name: "Transparent Header", path: "index_03.html" },
          { name: "Full width Header", path: "index_10.html" },
          { name: "Top bar Header", path: "index_08.html" },
          { name: "Bottom Header", path: "index_12.html" },
          { name: "Simple Header", path: "index_07.html" },
          { name: "More examples", path: "_headers.html", badge: "+" },
        ],
      },
      {
        title: "Boxed Home",
        links: [
          { name: "Large Boxed Content", path: "index_13.html" },
          { name: "Boxed Content", path: "index_11.html" },
          { name: "Onepage Full width Slider", path: "onepage.html" },
          { name: "Onepage Full Screen Slider", path: "onepage_02.html" },
          { name: "Onepage Parallax Image", path: "onepage_03.html" },
          { name: "Onepage Fixed Vertical Menu", path: "onepage_04.html" },
        ],
      },
    ],
  },
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
  const [showDrawer, setShowDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible); // Toggle the visibility
  };

  const handleScroll = () => {
    const navLinks = document.querySelectorAll(".menu > li > a");
    const mainNavbar = document.querySelector(".main-navbar");

    if (mainNavbar) {
      // Check if mainNavbar is not null
      if (window.scrollY > 10) {
        setIsScrolled(true);
        setFadeOut(false);
        mainNavbar.classList.add("shrink");
        navLinks.forEach((link) => link.classList.add("shrink"));
      } else {
        setIsScrolled(false);
        setFadeOut(true);
        mainNavbar.classList.remove("shrink");
        navLinks.forEach((link) => link.classList.remove("shrink"));
      }
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
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`inner-Banner-wrapper header-floating   ${
        isScrolled ? "scrolled" : ""
      } `}
    >
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
                  ></div>

                  <div className="pull-right xs-pull-left">
                    <a href="#" className="btn-e btn-small">
                      purchase
                    </a>
                    <span className="mr20"></span>
                    <a href="#" className="btn-bg rounded btn-small">
                      sign up
                    </a>
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
                    <div
                      className={`main-navbar ${isScrolled ? "shrink" : ""}`}
                    >
                      <div className="logo-wrapper">
                        <Link href="/" className="logo">
                          <img
                            src="/assets/images/secondary-logo.svg"
                            className="logo-img logo-light"
                            alt="Logo"
                          />
                        </Link>
                      </div>

                      <div className="">
                        <IconButton
                          className="hamburger d-block d-lg-none"
                          onClick={toggleNav}
                        >
                          <GiHamburgerMenu />
                        </IconButton>
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
                            <li
                              key={index}
                              className={
                                item.megamenu
                                  ? "has-megamenu"
                                  : item.submenu
                                  ? "has-submenu"
                                  : ""
                              }
                            >
                              <Link href={item.path}>{item.name}</Link>
                              {/* Render Megamenu if present */}

                              {/* {item.megamenu && (
                                <div className="megamenu">
                                  <div className="row">
                                    {item.megamenu.map((section, secIndex) => (
                                      <div className="col-3" key={secIndex}>
                                        <ul className="megamenu-list">
                                          <li className="title">
                                            {section.title}
                                          </li>
                                          {section.links.map(
                                            (link, linkIndex) => (
                                              <li key={linkIndex}>
                                                <Link href={link.path}>
                                                  {link.name}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )} */}

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
                            <a href="#">
                              <GiHamburgerMenu
                                onClick={handleToggleDrawer}
                                className="menu-icon"
                                style={{ cursor: "pointer" }}
                              />
                            </a>
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
                  href={crumb.path}
                  className={index === breadcrumbs.length - 1 ? "active" : ""}
                >
                  {crumb.name}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="separator"> / </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MUI Drawer */}
      <Drawer anchor="left" open={showDrawer} onClose={handleToggleDrawer}>
        <div className="offcanvas-background">
          <div className="bg-overlay gradient-4" />
          <button
            className="custom-close-btn"
            onClick={handleToggleDrawer}
            aria-label="Close"
          >
            ×
          </button>

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
                              <Link href={subItem.path}>{subItem.name}</Link>
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
                    <Link href={link.url}>
                      <div className="icon">{link.icon}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
      {/* MUI Drawer */}
    </div>
  );
};

export default SecondaryNavbar;
