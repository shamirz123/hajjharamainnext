import Image from "next/image";
import React from "react";

const HomeFeatures = () => {
  // Sample data for features
  const features = [
    {
      id: 1,
      icon: "/assets/images/demo/output.webp",
      title: "The Journey",
      description:
        "A sacred path to faith, unity, and recognition, with us experiencing Hajj like never before to make it the most memorable pilgrim.",
    },
    {
      id: 2,
      icon: "/assets/images/demo/hajj-guide.png",
      title: "Hajj Guide",
      description:
        "A complete guidance for customers to make them better understand about our Hajj services.So they do not have to be worried.",
    },
    {
      id: 3,
      icon: "/assets/images/demo/faqs.png",
      title: "Faq's",
      description:
        "Here are some of the questions which will guide you in better understanding, and answer all of your remaining queries with effectiveness.",
    },
  ];

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row col-p30 mt40 mb40">
            {features.map((feature) => (
              <div className="col-sm-6 col-md-4 xs-box" key={feature.id}>
                <div className="box-services-2 box-services-2a">
                  <div className="icon icon-2">
                    <Image
                      src={feature?.icon}
                      alt={feature?.title}
                      width={80}
                      height={60}
                      className="responsive-image"
                    />
                  </div>
                  <h3 className="title-small">{feature.title}</h3>
                  <div className="br-bottom-center mb20"></div>
                  <p className="mb0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFeatures;
