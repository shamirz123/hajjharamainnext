"use client";
import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";

const LatestProjects = () => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [videoId, setVideoId] = useState("");
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Essential Steps for Hajj",
      description: "typography, design",
      videoId: "IwKXU406J0Y",
    },
    {
      id: 2,
      title: "Key Moments During Hajj",
      description: "css, web design",
      videoId: "9A3LtP5Pa4I",
    },
    {
      id: 3,
      title: "A Guide to the Final Steps and Reflections",
      description: "art, illustration",
      videoId: "xQLHqqRivVY",
    },
  ];

  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diffX = e.clientX - startX;
    if (diffX > 50) {
      handleSelect((index + projects.length - 1) % projects.length);
      setStartX(e.clientX);
    } else if (diffX < -50) {
      handleSelect((index + 1) % projects.length);
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += 3) {
    groupedProjects.push(projects.slice(i, i + 3));
  }

  const openModal = (videoId: string) => {
    setVideoId(videoId);
    setShowModal(true);
  };

  const closeModal = () => {
    setVideoId("");
    setShowModal(false);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-dark section-boxed">
              <h2 className="title-uppercased large text-center color-on-dark mb0">
                Helpful Videos
              </h2>
            </div>
          </div>
        </div>
        <div className="row col-p0">
          <div className="col-sm-12">
            <div
              className="latest-project-carousel-container"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => setIsDragging(false)}
              ref={carouselRef}
            >
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={projects?.length > 3}
                indicators={false}
              >
                {groupedProjects.map((group, groupIndex) => (
                  <Carousel.Item key={groupIndex}>
                    <div className="row no-gutters">
                      {group.map((project) => (
                        <div className="col-md-4 p-0" key={project.id}>
                          <div
                            className="portfolio-2"
                            onClick={() => openModal(project.videoId)}
                          >
                            <img
                              src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                              alt={project.title}
                              className="img-fluid"
                            />
                            <div className="mask"></div>
                            <div className="portfolio-2-details">
                              <h3 className="title">
                                <span className="a-inherit">
                                  {project.title}
                                </span>
                              </h3>
                              {/* <p className="text">{project.description}</p> */}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body>
          <YouTube
            videoId={videoId}
            opts={{ width: "100%", height: "400px" }}
          />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default LatestProjects;
