import React from "react";
import { GrGallery, GrVideo } from "react-icons/gr";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Image from "next/image";

function JourneySection() {
  const journeyData = [
    {
      id: 1,
      title: "Sun goes down",
      author: "Giancarlo Stanton",
      date: "15 March, 2015",
      imageUrl: "/assets/images/demo/p01.jpg",
      description:
        "You know how it is: When you’re working toward something, keeping your focus is much easier. A woman may want to lose weight, for example, but perhaps.",
      type: "image", // "image" or "video"
    },
    {
      id: 2,
      title: "Cecillia and the satellite",
      author: "Clayton Kershaw",
      date: "15 July, 2015",
      imageUrl: "",
      description:
        "You know how it is: When you’re working toward something, keeping your focus is much easier. A woman may want to lose weight, for example, but perhaps.",
      type: "video",
      videoUrl: "https://player.vimeo.com/video/39822385",
    },
    {
      id: 3,
      title: "Raise your weapon",
      author: "Ryan Braun",
      date: "15 December, 2015",
      imageUrl: "/assets/images/demo/p13.jpg",
      description:
        "You know how it is: When you’re working toward something, keeping your focus is much easier. A woman may want to lose weight, for example, but perhaps.",
      type: "image",
    },
    {
      id: 6,
      title: "Goodbye friend",
      author: "Adam Jones",
      date: "15 March, 2015",
      imageUrl: "/assets/images/demo/blog03.jpg",
      description:
        "You know how it is: When you’re working toward something, keeping your focus is much easier. A woman may want to lose weight, for example, but perhaps.",
      type: "image",
    },

    {
      id: 5,
      title: "Just one last time",
      author: "Miguel Cabrera",
      date: "15 April, 2015",
      imageUrl: "/assets/images/demo/p02.jpg",
      description:
        "You know how it is: When you’re working toward something, keeping your focus is much easier. A woman may want to lose weight, for example, but perhaps.",
      type: "image",
    },
    {
      id: 4,
      title: "Lovers on the sun",
      author: "Adam Jones",
      date: "15 July, 2015",
      imageUrl: "/assets/images/demo/p12.jpg",
      description:
        "You know how it is: When you’re working toward something, keeping your focus is much easier. A woman may want to lose weight, for example, but perhaps.",
      type: "image",
    },

    {
      id: 7,
      title: "Teen feet tall",
      author: "Anthony Rizzo",
      date: "15 March, 2015",
      imageUrl: "/assets/images/demo/p07.jpg",
      description:
        "You know how it is: When you’re working toward something, keeping your focus is much easier. A woman may want to lose weight, for example, but perhaps.",
      type: "image",
    },

    {
      id: 9,
      title: "Chasing clouds",
      author: "Ian Desmond",
      date: "15 May, 2015",
      imageUrl: "/assets/images/demo/p11.jpg",
      description:
        "You know how it is: When you’re working toward something, keeping your focus is much easier. A woman may want to lose weight, for example, but perhaps.",
      type: "image",
    },
    {
      id: 8,
      title: "Sweet nothing",
      author: "Max Scherzer",
      date: "15 June, 2015",
      imageUrl: "/assets/images/demo/blog02.jpg",
      description:
        "You know how it is: When you’re working toward something, keeping your focus is much easier. A woman may want to lose weight, for example, but perhaps.",
      type: "image",
    },
  ];

  return (
    <>

      <div className="container pb-5">
        <div className="row mt-5 pt-5">
          {journeyData.map((journey) => (
            <div className="col-md-4 mb-4" key={journey.id}>
              <article className="blog-item p-3">
                <div className="d-flex flex-row">
                  <div className="p-2">
                    <div className="icon">
                      {journey.type === "image" ? <GrGallery /> : <GrVideo />}
                    </div>
                  </div>
                  <div className="p-2">
                    <h2 className="post-title">{journey.title}</h2>
                    <div className="sub-post-title">
                      <span>
                        by <a href="#">{journey.author}</a>
                      </span>
                      <span className="separator"> / </span>
                      <span>{journey.date}</span>
                    </div>
                  </div>
                </div>
                {journey.type === "image" ? (
                  <div className="blog-image-wrapper">
                    <figure className="blog-image">
                      <Image
                        src={journey.imageUrl}
                        alt={journey.title}
                        className="img-fluid"
                        width={100}
                        height={100}
                      />
                      <div className="blog-mask"></div>
                    </figure>
                    <div className="">
                      <a
                        href={journey.imageUrl}
                        title="Blog Image"
                        className="blog-expand init-popup image-popup"
                      ></a>
                    </div>
                  </div>
                ) : (
                  <div className="blog-image">
                    <iframe
                      src={journey.videoUrl}
                      className="rs-video w-100"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <div className="blog-caption">
                  <p>{journey.description}</p>
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
    </>
  );
}

export default JourneySection;
