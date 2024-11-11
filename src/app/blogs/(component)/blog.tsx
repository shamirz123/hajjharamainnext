import Image from "next/image";
import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { GrGallery, GrVideo } from "react-icons/gr"; // Adjust icon imports as necessary
import data from "../../../../public/data.json";

const Blogs = () => {
  return (
    <div className="container pb-5">
      <div className="row mt-5 pt-5">
        {data?.blogs.map((item, index) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <article className="blog-item  p-3">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <div className="icon">
                    {item.type === "image" ? <GrGallery /> : <GrVideo />}
                  </div>
                </div>
                <div className="p-2">
                  <h2 className="post-title">{item.title}</h2>
                  <div className="sub-post-title">
                    <span>
                      by <a href="#">{item.author}</a>
                    </span>
                    <span className="separator"> / </span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              {item.type === "image" ? (
                <div className="blog-image-wrapper">
                  <figure className="blog-image">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      className="img-fluid"
                      width={100}
                      height={100}
                    />
                    <div className="blog-mask"></div>
                  </figure>
                  <div className="">
                    <a
                      href={item.imageUrl}
                      title="Blog Image"
                      className="blog-expand init-popup image-popup"
                    ></a>
                  </div>
                </div>
              ) : (
                <div className="blog-image">
                  <iframe
                    src={item.videoUrl}
                    className="rs-video w-100"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className="blog-caption">
                <p>{item.description}</p>
                <p className="mb0">
                  <a className="read-more">
                    read more{" "}
                    <span className="icon">
                      <BsArrowsAngleExpand />
                    </span>
                  </a>
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
