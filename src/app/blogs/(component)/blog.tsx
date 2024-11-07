import Image from "next/image";
import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { GrGallery, GrVideo } from "react-icons/gr"; // Adjust icon imports as necessary

// Sample data for the blog posts
const blogData = [
  {
    id: 1,
    title: "Sun goes down",
    author: "Giancarlo Stanton",
    date: "15 March, 2015",
    imageUrl: "/assets/images/demo/p01.jpg",
    description:
      "You know how it is: When you’re working toward something, keeping your focus is much easier.",
    type: "image", // "image" or "video"
    videoUrl: "",
  },
  {
    id: 2,
    title: "Cecillia and the satellite",
    author: "Giancarlo Stanton",
    date: "15 July, 2015",
    imageUrl: "",
    description:
      "You know how it is: When you’re working toward something, keeping your focus is much easier.",
    type: "video",
    videoUrl: "https://player.vimeo.com/video/39822385",
  },
  {
    id: 3,
    title: "Raise your weapon",
    author: "Giancarlo Stanton",
    date: "15 December, 2015",
    imageUrl: "/assets/images/demo/p13.jpg",
    description:
      "You know how it is: When you’re working toward something, keeping your focus is much easier.",
    type: "image",
  },
  {
    id: 4,
    title: "Teen feet tall",
    author: "Giancarlo Stanton",
    date: "15 March, 2015",
    imageUrl: "/assets/images/demo/p07.jpg",
    description:
      "You know how it is: When you’re working toward something, keeping your focus is much easier.",
    type: "image",
  },
  {
    id: 5,
    title: "Sweet nothing",
    author: "Giancarlo Stanton",
    date: "15 June, 2015",
    imageUrl: "/assets/images/demo/p10.jpg",
    description:
      "You know how it is: When you’re working toward something, keeping your focus is much easier.",
    type: "image",
  },
  {
    id: 6,
    title: "Chasing clouds",
    author: "Giancarlo Stanton",
    date: "15 May, 2015",
    imageUrl: "/assets/images/demo/p11.jpg",
    description:
      "You know how it is: When you’re working toward something, keeping your focus is much easier.",
    type: "image",
  },
];

const Blogs = () => {
  return (
    <div className="container pb-5">
      <div className="row mt-5 pt-5">
        {blogData.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <article className="blog-item  p-3">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <div className="icon">
                    {blog.type === "image" ? <GrGallery /> : <GrVideo />}
                  </div>
                </div>
                <div className="p-2">
                  <h2 className="post-title">{blog.title}</h2>
                  <div className="sub-post-title">
                    <span>
                      by <a href="#">{blog.author}</a>
                    </span>
                    <span className="separator"> / </span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>

              {blog.type === "image" ? (
                <div className="blog-image-wrapper">
                  <figure className="blog-image">
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="img-fluid"
                      width={100}
                      height={100}
                    />
                    <div className="blog-mask"></div>
                  </figure>
                  <div className="">
                    <a
                      href={blog.imageUrl}
                      title="Blog Image"
                      className="blog-expand init-popup image-popup"
                    ></a>
                  </div>
                </div>
              ) : (
                <div className="blog-image">
                  <iframe
                    src={blog.videoUrl}
                    className="rs-video w-100"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className="blog-caption">
                <p>{blog.description}</p>
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
