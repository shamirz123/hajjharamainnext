"use client";
import Image from "next/image";
import React from "react";
import data from "../../../../../public/data.json";

function HajjGuide() {
  return (
    <>
      <div className="container container-area">
        <div className="row">
          {data?.hajjGuide.map((item, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "col-lg-12 col-md-12 col-sm-12"
                  : "col-lg-6 col-md-6 col-sm-12"
              }
            >
              <article className="blog-item">
                <div className="hajj-guide-wrapper">
                  <div className="">
                    <h2 className="post-title">{item.title}</h2>
                  </div>
                </div>
                <figure className="blog-image blog-view">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={500}
                    height={100}
                  />
                  <div className="blog-mask"></div>
                </figure>
                <div className="blog-caption">
                  <p>{item.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HajjGuide;
