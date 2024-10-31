import Image from "next/image";
import React from "react";

const HomeFeatures = () => {
  // Sample data for features
  const features = [
    {
      id: 1,
      icon: "/assets/images/demo/journey-icon.svg",
      title: "The Journey",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim temporibus quae, aliquid!",
    },
    {
      id: 2,
      icon: "/assets/images/demo/hajj-guide.svg",
      title: "Hajj Guide",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim temporibus quae, aliquid!",
    },
    {
      id: 3,
      icon: "/assets/images/demo/Faq.svg",
      title: "Faq's",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim temporibus quae, aliquid!",
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
