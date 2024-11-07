"use client";
import React from "react";
import { IoLocation, IoMail, IoCall } from "react-icons/io5"; // Importing relevant icons
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"; // Importing social media icons
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="row col-p30">
          <div className="col-sm-12 col-md-4">
            <div className="footer-widget">
              <h3 className="footer-title">About us</h3>
              <p>
                So if you have the time, and I assure you that you do, get ready
                for a journey that is certain to, if not buy you more time to do
                what you like.
              </p>
              <p className="mb0">
                <a href="#" className="read-more">
                  read more <i className="icon arrow_carrot-2right"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="footer-widget">
              <h3 className="footer-title">Get in touch</h3>
              <address className="contact-widget">
                <p>
                  <IoLocation className="icon icon_pin_alt" /> California, Los
                  Angeles 2200 Avenue
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
          <div className="col-sm-12 col-md-4">
            <div className="footer-widget">
              <h3 className="footer-title">Be Social</h3>
              <div className="">
                <ul className="footer-social">
                  <li>
                    <Link href="https://www.tiktok.com/@hajjharamain">
                      <FaTiktok className="icon social_twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/hajjharamain">
                      <FaFacebookF className="icon social_facebook" />
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#">
                      <FaGooglePlusG className="icon social_googleplus" />
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="#">
                      <FaPinterestP className="icon social_pinterest" />
                    </Link>
                  </li> */}
                  <li>
                    <Link href="https://www.instagram.com/hajjharamain">
                      <FaInstagram className="icon social_instagram" />
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#">
                      <FaDribbble className="icon social_dribbble" />
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="mb40"></div>
              <a href="#" className="btn-e">
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <p className="copyright">
              &copy; &nbsp; Copyright 2024 hajjharamain
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
