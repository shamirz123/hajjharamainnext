"use client";
import Image from "next/image";
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

interface SecondaryNavbarProps {
  heading: string;
  breadcrumbs: string[]; // Add breadcrumbs here
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

const SecondaryNavbar: React.FC<SecondaryNavbarProps> = ({
  heading,
  breadcrumbs,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

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
          className={`  header-wrapper inner-banner-top ${
            isScrolled ? "sticky" : ""
          } ${fadeOut ? "inner-fade-out" : ""} `}
        >
          <div className="main-header">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center secondary-navbar-wrapper">
                <div className="p-2">
                  <div className="logo-wrapper">
                    <Link href="/">
                      <Image
                        src="/assets/images/dark-logo.svg"
                        className=""
                        alt="Website logo"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                </div>
                <div className="p-2">
                  <div
                    className="hamburger d-block d-lg-none"
                    onClick={toggleNav}
                  >
                    <GiHamburgerMenu />
                  </div>
                  <nav className="navbar-right">
                    <ul
                      className={` inner-menu ${
                        isNavVisible ? "visible" : "hidden"
                      }`}
                    >
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
                    </ul>
                  </nav>
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
    </div>
  );
};

export default SecondaryNavbar;
