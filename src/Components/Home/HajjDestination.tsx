import Image from "next/image";
import Link from "next/link";
import React from "react";

// Sample data for services
const services = [
  {
    id: 1,
    image: "/assets/images/demo/minah-image.webp",
    title: "Mina",
    details: `Mina, the "Tent City" in Makkah, Saudi Arabia, hosts over 100,000 air-conditioned tents, providing vital shelter for Hajj pilgrims. Located near Jamarat, Mina is key to the symbolic stoning ritual. Its proximity makes it an essential part of the Hajj experience, offering comfort and convenience for pilgrims.`,
  },
  {
    id: 2,
    image: "/assets/images/demo/arafat-image.webp",
    title: "Arafat",
    details: `Mount Arafat, or Jabal al-Rahmah, is 20 km from Mecca and holds deep Islamic significance. Here, Prophet Muhammad (PBUH) delivered his farewell sermon. Annually, millions gather during Hajj for prayer and reflection, symbolizing unity and humility among Muslims worldwide, seeking forgiveness and blessings.
`,
  },
  {
    id: 3,
    image: "/assets/images/demo/muzdalif-image.webp",
    title: "Muzdalifah",
    description: "Fully Customizable",
    details: `Muzdalifah is a significant location during Hajj, where pilgrims gather after sunset in a serene open plain. The journey includes performing Maghrib and Isha prayers, collecting pebbles for the stoning ritual, and spending the night under the stars at Mash'ar al-Haram.`,
  },
];

const HajjDestinations = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row col-p20">
          {services.map((service) => (
            <div className="col-sm-6 col-md-4 xs-box3" key={service.id}>
              <div className="box-services-6">
                <img
                  src={service.image}
                  alt={`Image Service ${service.title}`}
                  width={500} // Set to actual width of the image file
                  height={200} // Set to actual height of the image file
                  className="br2 responsive-image"
                />
                <h3 className="title-uppercased mb0">{service.title}</h3>
                <div className="br-bottom mb30"></div>
                <p>{service.details}</p>
                <Link href="#" className="read-more">
                  read more <div className="icon arrow_carrot-2right"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HajjDestinations;
