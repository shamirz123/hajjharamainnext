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
          <div className="col-lg-9 col-md-9 col-sm-12">
            <article className="blog-item list-large">
              <div className="">
                <div className="box-left">
                  <div className="icon">
                    <GrGallery />
                  </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">Cecillia and the satellite</h2>
                  <div className="sub-post-title">
                    <span>
                      by <a href="#">Paul Goldschimdt</a>
                    </span>{" "}
                    <span className="separator"> / </span>{" "}
                    <span>15 March, 2015</span>
                  </div>
                </div>
              </div>
              <figure className="blog-image blog-view">
                <Image
                  src="/assets/images/demo/blog01.jpg"
                  alt="blog post"
                  width={100}
                  height={100}
                />
                <div className="blog-mask">
                  <a
                    href="/assets/images/demo/blog01.jpg"
                    title="Blog Image"
                    className="blog-expand init-popup image-popup"
                  >
                    <div className="icon">
                      <TbArrowsDiagonal />
                    </div>
                  </a>
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
                <a href="blog_post_sidebar.html" className="read-more">
                  read more
                </a>
              </div>
            </article>
            <article className="blog-item list-large">
              <div className="">
                <div className="box-left">
                  <div className="icon ">
                    {" "}
                    <FaFilm />
                  </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">Raise your weapon</h2>
                  <div className="sub-post-title">
                    <span>
                      by <a href="#">Michael Brantley</a>
                    </span>{" "}
                    <span className="separator"> / </span>{" "}
                    <span>15 April, 2015</span>
                  </div>
                </div>
              </div>
              <div className="blog-image">
                <iframe
                  src="https://player.vimeo.com/video/39822385"
                  className="rs-video"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
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
                <a href="blog_post_sidebar.html" className="read-more">
                  read more
                </a>
              </div>
            </article>
            <article className="blog-item list-large">
              <div className="">
                <div className="box-left">
                  <div className="icon">
                    <GrGallery />
                  </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">A sky full of stars</h2>
                  <div className="sub-post-title">
                    <span>
                      by <a href="#">Clayton Kershaw</a>
                    </span>{" "}
                    <span className="separator"> / </span>{" "}
                    <span>15 May, 2015</span>
                  </div>
                </div>
              </div>
              <figure className="blog-image">
                <Image
                  src="/assets/images/demo/blog02.jpg"
                  alt="blog post"
                  width={100}
                  height={100}
                />
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
                <a href="blog_post_sidebar.html" className="read-more">
                  read more
                </a>
              </div>
            </article>
            <article className="blog-item list-large">
              <div className="">
                <div className="box-left">
                  <i className="icon icon_documents_alt" />
                </div>
                <div className="box-right">
                  <h2 className="post-title">Lovers on the sun</h2>
                  <div className="sub-post-title">
                    <span>
                      by <a href="#">Miguel Cabrera</a>
                    </span>{" "}
                    <span className="separator"> / </span>{" "}
                    <span>15 June, 2015</span>
                  </div>
                </div>
              </div>
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
                <a href="blog_post_sidebar.html" className="read-more">
                  read more
                </a>
              </div>
            </article>
            <article className="blog-item list-large">
              <div className="">
                <div className="box-left">
                  <div className="icon">
                    <GrGallery />
                  </div>
                </div>
                <div className="box-right">
                  <h2 className="post-title">Just one last time</h2>
                  <div className="sub-post-title">
                    <span>
                      by <a href="#">Anthony Rizzo</a>
                    </span>{" "}
                    <span className="separator"> / </span>{" "}
                    <span>15 July, 2015</span>
                  </div>
                </div>
              </div>
              <figure className="blog-image blog-view">
                <Image
                  src="/assets/images/demo/blog03.jpg"
                  alt="blog post"
                  width={100}
                  height={100}
                />
                <div className="blog-mask">
                  <a
                    href="/assets/images/demo/blog03.jpg"
                    title="Blog Image"
                    className="blog-expand init-popup image-popup"
                  >
                    <div className="icon">
                      <TbArrowsDiagonal />
                    </div>
                  </a>
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
                <a href="blog_post_sidebar.html" className="read-more">
                  read more
                </a>
              </div>
            </article>
            {/* Pagination */}
            {/* ============================================= */}
            <ul className="pagination mt30">
              <li className="disabled">
                <a href="#">
                  <i className="icon arrow_left" />
                </a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i className="icon arrow_right" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <a href="#" id="toggle-sidebar">
              Sidebar
            </a>
            <aside className="sidebar">
              <div className="sidebar-widget">
                <h3 className="sidebar-title">I feel a million miles away</h3>
                <p>
                  Sticking to a time-scheduling system can’t guarantee the
                  return of your longlost vacation days, but by regularly
                  tracking your meetings, appointments.
                </p>
              </div>
              <div className="sidebar-widget">
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
                  <i className="icon social_twitter" />
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
              <div className="sidebar-widget horizontal">
                <Tabs
                  activeKey={activeKey}
                  onSelect={(k) => k && handleTabChange(k)}
                  className="flex-column nav nav-tabs vertical"
                >
                  <Tab eventKey="popular" title="Popular"></Tab>
                  <Tab eventKey="latest" title="Latest"></Tab>
                </Tabs>

                {activeKey === "popular" && (
                  <div className={`${fadeClass}`}>
                    <div>
                      <ul className="sidebar-posts">
                        <li className="sidebar-post">
                          <div className="image-post">
                            <Image
                              src="/assets/images/demo/p03.jpg"
                              alt="blog post"
                              width={100}
                              height={100}
                            />
                            <div className="image-post-date">
                              25 <br /> jan
                            </div>
                          </div>
                          <div className="info-post">
                            <h5>
                              <a href="blog_single_left.html">Sweet nothing</a>
                            </h5>
                            <span>by Mike Trout</span>
                          </div>
                        </li>
                        <li className="sidebar-post">
                          <div className="image-post">
                            <Image
                              src="/assets/images/demo/p04.jpg"
                              alt="blog post"
                              width={100}
                              height={100}
                            />
                            <div className="image-post-date">
                              20 <br /> feb
                            </div>
                          </div>
                          <div className="info-post">
                            <h5>
                              <a href="blog_single_left.html">Teen feet tall</a>
                            </h5>
                            <span>by Clayton Kershaw</span>
                          </div>
                        </li>
                        <li className="sidebar-post">
                          <div className="image-post">
                            <Image
                              src="/assets/images/demo/p05.jpg"
                              alt="blog post"
                              width={100}
                              height={100}
                            />
                            <div className="image-post-date">
                              27 <br /> feb
                            </div>
                          </div>
                          <div className="info-post">
                            <h5>
                              <a href="blog_single_left.html">Goodbye friend</a>
                            </h5>
                            <span>by Adam Jones</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="tab2">
                      <ul className="sidebar-posts">
                        <li className="sidebar-post">
                          <div className="image-post">
                            <Image
                              src="/assets/images/demo/p01.jpg"
                              alt="blog post"
                              width={100}
                              height={100}
                            />
                            <div className="image-post-date">
                              25 <br /> jan
                            </div>
                          </div>
                          <div className="info-post">
                            <h5>
                              <a href="blog_single_left.html">Sun goes down</a>
                            </h5>
                            <span>by Anthony Rizzo</span>
                          </div>
                        </li>
                        <li className="sidebar-post">
                          <div className="image-post">
                            <Image
                              src="/assets/images/demo/p02.jpg"
                              alt="blog post"
                              width={100}
                              height={100}
                            />
                            <div className="image-post-date">
                              20 <br /> feb
                            </div>
                          </div>
                          <div className="info-post">
                            <h5>
                              <a href="blog_single_left.html">
                                Don&#39;t look back
                              </a>
                            </h5>
                            <span>by Michael Brantley</span>
                          </div>
                        </li>
                        <li className="sidebar-post">
                          <div className="image-post">
                            <Image
                              src="/assets/images/demo/p06.jpg"
                              alt="blog post"
                              width={100}
                              height={100}
                            />
                            <div className="image-post-date">
                              27 <br /> feb
                            </div>
                          </div>
                          <div className="info-post">
                            <h5>
                              <a href="blog_single_left.html">
                                A sky full of stars
                              </a>
                            </h5>
                            <span>by Ian Desmond</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeKey === "latest" && (
                  <div className={`${fadeClass}`}>
                    <ul className="sidebar-posts">
                      <li className="sidebar-post">
                        <div className="image-post">
                          <Image
                            src="/assets/images/demo/p01.jpg"
                            alt="blog post"
                            width={100}
                            height={100}
                          />
                          <div className="image-post-date">
                            25 <br /> jan
                          </div>
                        </div>
                        <div className="info-post">
                          <h5>
                            <a href="blog_single_left.html">Sun goes down</a>
                          </h5>
                          <span>by Anthony Rizzo</span>
                        </div>
                      </li>
                      <li className="sidebar-post">
                        <div className="image-post">
                          <Image
                            src="/assets/images/demo/p02.jpg"
                            alt="blog post"
                            width={100}
                            height={100}
                          />
                          <div className="image-post-date">
                            20 <br /> feb
                          </div>
                        </div>
                        <div className="info-post">
                          <h5>
                            <a href="blog_single_left.html">Don&#39;t look back</a>
                          </h5>
                          <span>by Michael Brantley</span>
                        </div>
                      </li>
                      <li className="sidebar-post">
                        <div className="image-post">
                          <Image
                            src="/assets/images/demo/p06.jpg"
                            alt="blog post"
                            width={100}
                            height={100}
                          />
                          <div className="image-post-date">
                            27 <br /> feb
                          </div>
                        </div>
                        <div className="info-post">
                          <h5>
                            <a href="blog_single_left.html">
                              A sky full of stars
                            </a>
                          </h5>
                          <span>by Ian Desmond</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="sidebar-widget">
                <h3 className="sidebar-title">Categories</h3>
                <div className="panel-group sidebar-categories" id="accordion">
                  <div className="panel">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#one"
                        >
                          {" "}
                          <i className="icon icon_plus" /> Design
                        </a>
                      </h4>
                    </div>
                    <div id="one" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <a href="#">Web Design</a>
                          </li>
                          <li>
                            <a href="#">Graphic Design</a>
                          </li>
                          <li>
                            <a href="#">Architecture</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          href="#two"
                          data-parent="#accordion"
                        >
                          <i className="icon icon_plus" /> Development
                        </a>
                      </h4>
                    </div>
                    <div id="two" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <a href="#">WordPress</a>
                          </li>
                          <li>
                            <a href="#">JavaScript</a>
                          </li>
                          <li>
                            <a href="#">PHP &amp; MySQL</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          href="#three"
                          data-parent="#accordion"
                        >
                          <i className="icon icon_plus" /> Freebies
                        </a>
                      </h4>
                    </div>
                    <div id="three" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <a href="#">Templates</a>
                          </li>
                          <li>
                            <a href="#">Stock Photo</a>
                          </li>
                          <li>
                            <a href="#">Code Snippets</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-widget">
                <h3 className="sidebar-title">Archives</h3>
                <ul className="sidebar-archives">
                  <li>
                    <a href="#">
                      January <span>25</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      February <span>14</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      March <span>21</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      April <span>10</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      June <span>15</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      July <span>07</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h3 className="sidebar-title">Tags</h3>
                <div className="tags">
                  <a href="#" title="10 Topics" className="big">
                    Wordpress
                  </a>
                  <a href="#" title="10 Topics">
                    Concrete5
                  </a>
                  <a href="#" title="10 Topics" className="big">
                    Drupal
                  </a>
                  <a href="#" title="10 Topics">
                    Joomla
                  </a>
                  <a href="#" title="10 Topics" className="big">
                    PHP
                  </a>
                  <a href="#" title="10 Topics">
                    HTML5
                  </a>
                  <a href="#" title="10 Topics">
                    CSS3
                  </a>
                  <a href="#" title="10 Topics" className="big">
                    jQuery
                  </a>
                  <a href="#" title="10 Topics">
                    Java
                  </a>
                  <a href="#" title="10 Topics">
                    Ruby
                  </a>
                  <a href="#" title="10 Topics" className="big">
                    Javascript
                  </a>
                </div>
              </div>
              <div className="sidebar-widget">
                <h3 className="sidebar-title">Get in touch</h3>
                <address className="contact-widget">
                  <p>
                    <i className="icon icon_pin_alt" /> Los Angeles 2200 Avenue
                  </p>
                  <p>
                    <i className="icon icon_mail_alt" /> office@shiftThemes.com
                  </p>
                  <p>
                    <i className="icon icon_phone" /> 0 555 255 444
                  </p>
                </address>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default HajjGuide;
