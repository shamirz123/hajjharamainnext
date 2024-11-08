"use client";
import Image from "next/image";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  FaFacebookF,
  FaFilm,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { TbArrowsDiagonal } from "react-icons/tb";

function HajjGuide() {
  // Define the active tab state
  const [activeKey, setActiveKey] = useState("popular");
  const [fadeClass, setFadeClass] = useState("");
  // Define the active tab state

  const handleTabChange = (k: string) => {
    setFadeClass(""); // Reset fade class
    setActiveKey(k); // Change tab
    setTimeout(() => {
      setFadeClass("fade-in");
    }, 50); // Slight delay to ensure the class is applied after content change
  };
  return (
    <>
      <div className="container container-area">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <article className="blog-item list-large">
              <div className="">
                <div className="box-left">
                  <div className="icon">
                    <GrGallery />
                  </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">Cecillia and the satellite</h2>
                 
                </div>
              </div>
              <figure className="blog-image blog-view">
                <img
                  src="/assets/images/demo/blog01.jpg"
                  alt="blog post"
                  width={100}
                  height={100}
                />
                <div className="blog-mask">
                  {/* <a
                    href="/assets/images/demo/blog01.jpg"
                    title="Blog Image"
                    className="blog-expand init-popup image-popup"
                  >
                    <div className="icon">
                      <TbArrowsDiagonal />
                    </div>
                  </a> */}
                </div>
              </figure>
              <div className="blog-caption">
                <p>
                  As you put together your list of goals, you need to consider
                  the five core aspects of wants that I cover in this section.
                  My mentor Jim Rohn taught them to me when I was in my 20s.
                  These five questions dramatically reduced the amount of time I
                  needed to achieve many of the goals that are now crossed off
                  my goal sheets, and these same questions can help you expand
                  your thinking.
                </p>
                {/* <a href="blog_post_sidebar.html" className="read-more">
                  read more
                </a> */}
              </div>
            </article>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <article className="blog-item">
              <div className="clearfix">
                <div className="box-left">
             
                  <div className="icon">
                      
                      <GrGallery />
                    </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">Sun goes down</h2>
               
                </div>
              </div>
              <figure className="blog-image blog-view">
                <img src="/assets/images/demo/p01.jpg" alt="blog post" />
                <div className="blog-mask">
                  
                </div>
              </figure>
              <div className="blog-caption">
                <p>
                  You know how it is: When you’re working toward something,
                  keeping your focus is much easier. A woman may want to lose
                  weight, for example, but perhaps.
                </p>
                {/* <p className="mb0">
                  <a href="blog_post_sidebar.html" className="read-more">
                    read more <i className="icon arrow_carrot-2right" />
                  </a>
                </p> */}
              </div>
            </article>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <article className="blog-item">
              <div className="clearfix">
                <div className="box-left">
             
                  <div className="icon">
                      
                      <GrGallery />
                    </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">Sun goes down</h2>
               
                </div>
              </div>
              <figure className="blog-image blog-view">
                <img src="/assets/images/demo/p01.jpg" alt="blog post" />
                <div className="blog-mask">
                  
                </div>
              </figure>
              <div className="blog-caption">
                <p>
                  You know how it is: When you’re working toward something,
                  keeping your focus is much easier. A woman may want to lose
                  weight, for example, but perhaps.
                </p>
                {/* <p className="mb0">
                  <a href="blog_post_sidebar.html" className="read-more">
                    read more <i className="icon arrow_carrot-2right" />
                  </a>
                </p> */}
              </div>
            </article>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <article className="blog-item">
              <div className="clearfix">
                <div className="box-left">
             
                  <div className="icon">
                      
                      <GrGallery />
                    </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">Sun goes down</h2>
               
                </div>
              </div>
              <figure className="blog-image blog-view">
                <img src="/assets/images/demo/p01.jpg" alt="blog post" />
                <div className="blog-mask">
                  
                </div>
              </figure>
              <div className="blog-caption">
                <p>
                  You know how it is: When you’re working toward something,
                  keeping your focus is much easier. A woman may want to lose
                  weight, for example, but perhaps.
                </p>
                {/* <p className="mb0">
                  <a href="blog_post_sidebar.html" className="read-more">
                    read more <i className="icon arrow_carrot-2right" />
                  </a>
                </p> */}
              </div>
            </article>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <article className="blog-item">
              <div className="clearfix">
                <div className="box-left">
             
                  <div className="icon">
                      
                      <GrGallery />
                    </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">Sun goes down</h2>
               
                </div>
              </div>
              <figure className="blog-image blog-view">
                <img src="/assets/images/demo/p01.jpg" alt="blog post" />
                <div className="blog-mask">
                  
                </div>
              </figure>
              <div className="blog-caption">
                <p>
                  You know how it is: When you’re working toward something,
                  keeping your focus is much easier. A woman may want to lose
                  weight, for example, but perhaps.
                </p>
                {/* <p className="mb0">
                  <a href="blog_post_sidebar.html" className="read-more">
                    read more <i className="icon arrow_carrot-2right" />
                  </a>
                </p> */}
              </div>
            </article>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <article className="blog-item">
              <div className="clearfix">
                <div className="box-left">
             
                  <div className="icon">
                      
                      <GrGallery />
                    </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">Sun goes down</h2>
               
                </div>
              </div>
              <figure className="blog-image blog-view">
                <img src="/assets/images/demo/p01.jpg" alt="blog post" />
                <div className="blog-mask">
                  
                </div>
              </figure>
              <div className="blog-caption">
                <p>
                  You know how it is: When you’re working toward something,
                  keeping your focus is much easier. A woman may want to lose
                  weight, for example, but perhaps.
                </p>
                {/* <p className="mb0">
                  <a href="blog_post_sidebar.html" className="read-more">
                    read more <i className="icon arrow_carrot-2right" />
                  </a>
                </p> */}
              </div>
            </article>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <article className="blog-item">
              <div className="clearfix">
                <div className="box-left">
             
                  <div className="icon">
                      
                      <GrGallery />
                    </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">Sun goes down</h2>
               
                </div>
              </div>
              <figure className="blog-image blog-view">
                <img src="/assets/images/demo/p01.jpg" alt="blog post" />
                <div className="blog-mask">
                  
                </div>
              </figure>
              <div className="blog-caption">
                <p>
                  You know how it is: When you’re working toward something,
                  keeping your focus is much easier. A woman may want to lose
                  weight, for example, but perhaps.
                </p>
                {/* <p className="mb0">
                  <a href="blog_post_sidebar.html" className="read-more">
                    read more <i className="icon arrow_carrot-2right" />
                  </a>
                </p> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default HajjGuide;
