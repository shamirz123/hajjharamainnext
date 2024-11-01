"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  
  FaGlobe,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { RiPinterestFill } from "react-icons/ri";
import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown } from "react-bootstrap";

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
      { name: "The Journey", path: "/about-us/journey" },
      { name: "Hajj Guide", path: "/about-us/hajjguide" },
    ],
  },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contactus" },
];

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`header-transparent menu-fixed-dark menu-dark-mobiles menu-dark ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className={`topbar d-none d-lg-block ${isScrolled ? "hidden" : ""}`}>
        <div className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="d-flex flex-row text-2">
                  <div className="p-2">
                    <IoLocation className="icon mr-1" />
                    <span className="mb-0">Los Angeles 2200 Avenue</span>
                  </div>
                  <div className="p-2">
                    <IoIosCall className="icon" />
                    <span className="mb-0">0 555 255 444</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
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

      <header
        className={`header-wrapper ${isScrolled ? "sticky" : ""} ${
          fadeOut ? "fade-out" : ""
        }`}
      >
        <div className="">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center primary-navbar">
              <div className="logo-wrapper">
                <Link href="/">
                  <Image
                    src="/assets/images/website-logo.svg"
                    alt="Website logo"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div className="">
                <div
                  className="hamburger d-block d-lg-none"
                  onClick={toggleNav}
                >
                  <GiHamburgerMenu />
                </div>
                <nav className="navbar-right">
                  <ul className={`menu ${isNavVisible ? "visible" : "hidden"}`}>
                    {menuItems.map((item, index) => (
                      <li key={index}>
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
                    {/* Language Chnager */}
                    <li className="language-selector">
                      <Dropdown>
                        <Dropdown.Toggle variant="link" id="dropdown-basic">
                          <FaGlobe className="language-icon" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                          // onClick={() => handleLanguageChange("en")}
                          >
                            <img
                              src="/assets/images/flag_england.png"
                              alt="English"
                              style={{ width: "20px", marginRight: "8px" }}
                            />{" "}
                            English
                          </Dropdown.Item>
                          <Dropdown.Item
                          // onClick={() => handleLanguageChange("ar")}
                          >
                            <img
                              src="/assets/images/united-arab-emirates.png"
                              alt="Arabic"
                              style={{ width: "20px", marginRight: "8px" }}
                            />{" "}
                            Arabic
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>

                    {/* Menu icon for desktop */}
                    <li
                      className="d-none d-lg-inline-block desktop-menu-icon"
                      onClick={handleShow}
                    >
                      <span>
                        <GiHamburgerMenu style={{ cursor: "pointer" }} />
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* OffCanvas */}
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
                      <li  className="panel-title" key={index}>
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
      {/* OffCanvas */}
    </div>
  );
};

export default Navbar;
