import React from "react";
import Image from "next/image";
import data from "../../../../public/data.json";

function JourneySection() {
  return (
    <>
      <div className="container pb-5">
        <div className="row mt-5 pt-5">
          {data?.journey.map((journey) => (
            <div className="col-md-4 mb-4" key={journey.id}>
              <article className="blog-item p-3">
                <div className="d-flex flex-row">
                  <div className="p-2">
                    <div className="icon journey-images-wrapper">
                      {/* <GrGallery /> */}
                      <Image
                        src={journey.iconUrl}
                        alt={`${journey.title} icon`}
                        className="img-fluid"
                        width={500}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="p-2">
                    <h2 className="post-title">{journey.title}</h2>
                  </div>
                </div>
                <div className="blog-image-wrapper">
                  <figure className="blog-image">
                    <Image
                      src={journey.imageUrl}
                      alt={journey.title}
                      className="img-fluid"
                      width={500}
                      height={400}
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
                <div className="blog-caption">
                  <p>{journey.description}</p>
                  {/* <p className="mb0">
                    <a className="read-more">
                      read more{" "}
                      <span className="icon">
                        <BsArrowsAngleExpand />
                      </span>
                    </a>
                  </p> */}
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
