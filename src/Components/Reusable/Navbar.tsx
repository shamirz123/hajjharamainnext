"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiPinterestFill } from "react-icons/ri";
import { Drawer, IconButton } from "@mui/material";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const sections = [
  {
    title: "Oceania",
    links: [
      { label: "American Samoa", icon: <MdLocationPin /> },
      { label: "Cook Islands", icon: <MdLocationPin /> },
      { label: "Fiji", icon: <MdLocationPin /> },
      { label: "French Polynesia", icon: <MdLocationPin /> },
      { label: "Guadeloupe", icon: <MdLocationPin /> },
      { label: "Kiribati", icon: <MdLocationPin /> },
      { label: "Marshall Islands", icon: <MdLocationPin /> },
      { label: "Micronesia", icon: <MdLocationPin /> },
      { label: "New Caledonia", icon: <MdLocationPin /> },
      { label: "New Zealand", icon: <MdLocationPin /> },
      { label: "Niue", icon: <MdLocationPin /> },
      {
        label: "Northern Marianas Islands",
        icon: <MdLocationPin />,
        href: "#",
      },
      { label: "Papua New Guinea", icon: <MdLocationPin /> },
      { label: "Niue", icon: <MdLocationPin /> },
      { label: "Solomon Islands", icon: <MdLocationPin /> },
      { label: "Tokelau", icon: <MdLocationPin /> },
      { label: "Tonga Islands", icon: <MdLocationPin /> },
      { label: "Tuvalu", icon: <MdLocationPin /> },
      { label: "Vanuatu", icon: <MdLocationPin /> },
      {
        label: "Wallis and Futuna Islands",
        icon: <MdLocationPin />,
        href: "#",
      },
      { label: "Western Samoa", icon: <MdLocationPin /> },
    ],
  },
  {
    title: "North America",
    links: [
      { label: "Anguilla", icon: <MdLocationPin /> },
      { label: "Antigua and Barbuda", icon: <MdLocationPin /> },
      { label: "Bahamas", icon: <MdLocationPin /> },
      { label: "Barbados", icon: <MdLocationPin /> },
      { label: "Belize", icon: <MdLocationPin /> },
      { label: "Bermuda", icon: <MdLocationPin /> },
      { label: "British Virgin Islands", icon: <MdLocationPin /> },
      { label: "Canada", icon: <MdLocationPin /> },
      { label: "Costa Rica", icon: <MdLocationPin /> },
      { label: "Cuba", icon: <MdLocationPin /> },
      { label: "Dominica", icon: <MdLocationPin /> },
      { label: "Dominican Republic", icon: <MdLocationPin /> },
      { label: "Grenada", icon: <MdLocationPin /> },
      { label: "Guam", icon: <MdLocationPin /> },
      { label: "Guatemala", icon: <MdLocationPin /> },
      { label: "Haiti", icon: <MdLocationPin /> },
      { label: "Honduras", icon: <MdLocationPin /> },
      { label: "Jamaica", icon: <MdLocationPin /> },
      { label: "Martinique", icon: <MdLocationPin /> },
      { label: "Mexico", icon: <MdLocationPin /> },
      { label: "Montserrat", icon: <MdLocationPin /> },
      { label: "Nicaragua", icon: <MdLocationPin /> },
      { label: "Panama", icon: <MdLocationPin /> },
      { label: "Puerto Rico", icon: <MdLocationPin /> },
      { label: "Saint Kitts and Nevis", icon: <MdLocationPin /> },
      { label: "Saint Lucia", icon: <MdLocationPin /> },
      { label: "Saint Pierre and Miquelon", icon: <MdLocationPin /> },
      {
        label: "Saint Vincent and the Grenadines",
        icon: <MdLocationPin />,
        href: "#",
      },
      { label: "Salvador", icon: <MdLocationPin /> },
      { label: "Trinidad and Tobago", icon: <MdLocationPin /> },
      { label: "Turks and Caicos Islands", icon: <MdLocationPin /> },
      { label: "United States of America", icon: <MdLocationPin /> },
      { label: "US Virgin Islands", icon: <MdLocationPin /> },
      { label: "Honduras", icon: <MdLocationPin /> },
    ],
  },
  {
    title: "South America",
    links: [
      { label: "Argentina", icon: <MdLocationPin /> },
      { label: "Aruba", icon: <MdLocationPin /> },
      { label: "Bolivia", icon: <MdLocationPin /> },
      { label: "Brazil", icon: <MdLocationPin /> },
      { label: "Chile", icon: <MdLocationPin /> },
      { label: "Colombia", icon: <MdLocationPin /> },
      { label: "Ecuador", icon: <MdLocationPin /> },
      { label: "Falkland Islands", icon: <MdLocationPin /> },
      { label: "French Guiana", icon: <MdLocationPin /> },
      { label: "Guyana", icon: <MdLocationPin /> },
      { label: "Paraguay", icon: <MdLocationPin /> },
      { label: "Peru", icon: <MdLocationPin /> },
      { label: "Suriname", icon: <MdLocationPin /> },
      { label: "Uruguay", icon: <MdLocationPin /> },
      { label: "Venezuela", icon: <MdLocationPin /> },
    ],
  },
  {
    title: "Europe",
    links: [
      { label: "Andorra", icon: <MdLocationPin /> },
      { label: "Armenia", icon: <MdLocationPin /> },
      { label: "Austria", icon: <MdLocationPin /> },
      { label: "Belarus", icon: <MdLocationPin /> },
      { label: "Belgium", icon: <MdLocationPin /> },
      { label: "Bulgaria", icon: <MdLocationPin /> },
      { label: "Croatia", icon: <MdLocationPin /> },
      { label: "Cyprus", icon: <MdLocationPin /> },
      { label: "Czech Republic", icon: <MdLocationPin /> },
      { label: "Denmark", icon: <MdLocationPin /> },
      { label: "Estonia", icon: <MdLocationPin /> },
      { label: "Faroe Islands", icon: <MdLocationPin /> },
      { label: "Finland", icon: <MdLocationPin /> },
      { label: "France", icon: <MdLocationPin /> },
      { label: "Georgia", icon: <MdLocationPin /> },
      { label: "Germany", icon: <MdLocationPin /> },
      { label: "Gibraltar", icon: <MdLocationPin /> },
      { label: "Greece", icon: <MdLocationPin /> },
      { label: "Hungary", icon: <MdLocationPin /> },
      { label: "Iceland", icon: <MdLocationPin /> },
      { label: "Ireland", icon: <MdLocationPin /> },
      { label: "Italy", icon: <MdLocationPin /> },
      { label: "Latvia", icon: <MdLocationPin /> },
      { label: "Liechtenstein", icon: <MdLocationPin /> },
      { label: "Lithuania", icon: <MdLocationPin /> },
      { label: "Luxembourg", icon: <MdLocationPin /> },
      { label: "Malta", icon: <MdLocationPin /> },
      { label: "Moldavia", icon: <MdLocationPin /> },
      { label: "Monaco", icon: <MdLocationPin /> },
      { label: "Netherlands", icon: <MdLocationPin /> },
      { label: "Romania", icon: <MdLocationPin /> },
      { label: "Portugal", icon: <MdLocationPin /> },
      { label: "Poland", icon: <MdLocationPin /> },
      { label: "San Marino", icon: <MdLocationPin /> },
      { label: "Serbia", icon: <MdLocationPin /> },
      { label: "Spain", icon: <MdLocationPin /> },
      { label: "St. Helena", icon: <MdLocationPin /> },
      { label: "Sweden", icon: <MdLocationPin /> },
      { label: "Switzerland", icon: <MdLocationPin /> },
      { label: "Ukraine", icon: <MdLocationPin /> },
      { label: "United Kingdom", icon: <MdLocationPin /> },
    ],
  },
  {
    title: "Africa",
    links: [
      { label: "Eswatini (Swaziland)", icon: <MdLocationPin /> },
      { label: "Botswana", icon: <MdLocationPin /> },
      { label: "Lesotho", icon: <MdLocationPin /> },
      { label: "Mayotte Island", icon: <MdLocationPin /> },
      { label: "Reunion Island", icon: <MdLocationPin /> },
      { label: "Seychelles", icon: <MdLocationPin /> },
    ],
  },
  {
    title: "Asia",
    links: [
      { label: "Japan", icon: <MdLocationPin /> },
      { label: "South Korea", icon: <MdLocationPin /> },
    ],
  },
];

const socialLinks = [
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaGooglePlusG />, url: "#" },
  { icon: <RiPinterestFill />, url: "#" },
  { icon: <FaLinkedinIn />, url: "#" },
];

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  { name: "Packages", path: "/packages" },
  {
    name: "Countries",
    path: "/serviced-countries",
    megamenu: sections,
  },
  { name: "Apply Now", path: "/apply-now" },
  {
    name: "About Us",
    path: "/about-us",
    submenu: [
      { name: "The Journey", path: "/about-us/journey" },
      { name: "Hajj Guide", path: "/about-us/hajjguide" },
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

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]); // Default to English

  const handleToggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleScroll = () => {
    const navLinks = document.querySelectorAll(".menu > li > a");
    const headerWrapper = document.querySelector(".header-wrapper");

    if (headerWrapper) {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        setFadeOut(false);
        headerWrapper.classList.add("shrink");
        navLinks.forEach((link) => link.classList.add("shrink"));
      } else {
        setIsScrolled(false);
        setFadeOut(true);
        headerWrapper.classList.remove("shrink");
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
    <>
      <div className="header-transparent menu-fixed-dark menu-dark-mobiles menu-dark primary-navbar">
        <header
          className={`  header-wrapper ${isScrolled ? "sticky shrink" : ""} ${
            fadeOut ? "fade-out" : ""
          }  `}
        >
          <div className="sticky-wrapper">
            <div className="container-fullwidth">
              <div className="row">
                <div className="col-sm-12">
                  <div
                    className={`menu-wrapper ${
                      isScrolled ? "navbarShrink" : ""
                    }`}
                  >
                    <div className="main-navbar">
                      <div className="logo-wrapper">
                        <Link href="/" className="logo">
                          {/* <img
                            src="/assets/images/logo-light.png"
                            className="logo-img logo-light"
                            alt="Logo"
                          /> */}
                          <Image
                            src="/assets/images/primary-logo.svg"
                            className="logo-img logo-light"
                            alt="Logo"
                            width={200}
                            height={60}
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
                          className={` menu ${
                            isNavVisible ? "visible" : "hidden"
                          }  `}
                        >
                          {/* Toggle Menu - For Mobile Devices */}
                          <li className="toggle-menu">
                            {" "}
                            <i className="icon icon_menu" />
                          </li>
                          {menuItems.map((item, index) => (
                            <li key={index}>
                              <Link href={item.path}>{item.name}</Link>
                              {/* Render Megamenu if present */}
                              {item.megamenu && (
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
                                                <Link href="">
                                                  <div className="d-flex align-items-center">
                                                    <div className="icon me-2">
                                                      {link.icon}
                                                    </div>
                                                    <span>{link.label}</span>
                                                  </div>
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
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
                              <Image
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
                                  <Link
                                    href="#"
                                    onClick={() =>
                                      handleLanguageChange(language)
                                    }
                                  >
                                    <Image
                                      src={language.flag}
                                      alt={language.name}
                                      width={16}
                                      height={16}
                                      className="img-language"
                                    />
                                    {language.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>

                          <li className="d-none d-lg-inline-block desktop-menu-icon">
                            <Link href="#">
                              <GiHamburgerMenu
                                onClick={handleToggleDrawer}
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
    </>
  );
};

export default Navbar;
