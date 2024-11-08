import React from "react";
import { GrGallery, GrVideo } from "react-icons/gr";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Image from "next/image";

function JourneySection() {
  const journeyData = [
    {
      id: 1,
      title: "Ihram",
      imageUrl: "/assets/images/demo/journey/Ihram.webp",
      description:
        "When you go to the holy place of Makkah, the first step to follow is to wear Ihram. It is to show the sincere intention that you are actually ready to perform an Hajj with the core of your heart.",
    },
    {
      id: 2,
      title: "Tawaf Al-Qudum",

      description:
        "When you enter Makkah then the step known as Tawaf Al-Qadum comes, in which the person has to take seven rounds around Kaaba and pray two Rakats of Tawaf just behind the Maqam Ibrahim.",

      imageUrl: "/assets/images/demo/journey/Tawaf_Al-Qudum.webp",
    },
    {
      id: 3,
      title: "Sa'i between Safa and Marwa",

      imageUrl: "/assets/images/demo/journey/Sa'i_between_Safa_and_Marwa.webp",
      description:
        "In this person has to walk seven times from Safa to Marwa, perform Sa'i between Safa and Marwah.",
    },
    {
      id: 6,
      title: "Mina",

      imageUrl: "/assets/images/demo/journey/Mina.webp",
      description:
        "On the morning of Dhul-Hijjah 8, travel to Mina and spend the night, spending the entire night praying and soliciting till the morning of Dhul-Hijjah 9.",
    },

    {
      id: 5,
      title: "Arafah",

      imageUrl: "/assets/images/demo/journey/Arafah.webp",
      description:
        "Go to Arafat and devote yourself to Allah until sunset on the ninth day of Dhul-Hijjah.",
    },
    {
      id: 4,
      title: "Muzdalifah",

      imageUrl: "/assets/images/demo/journey/Muzdalifah.webp",
      description:
        "Move to Muzdalifah after sunset on the 9th of Dhul-Hijjah, where you will spend the night and gather seven pebbles for the next Jamarat ceremonies.",
    },

    {
      id: 7,
      title: "Pelt Jamrat Al-Aqabah",

      imageUrl: "/assets/images/demo/journey/Pelt_Jamrat_Al-Aqabah.webp",
      description:
        "On the 10th day of Dhul-Hijjah, which is Eid, go back to Mina and recite Takbeer while throwing seven pebbles at Jamrat Al-Aqabah.",
    },

    {
      id: 8,
      title: "Adhahi",
      imageUrl: "/assets/images/demo/journey/Adhahi.webp",
      description:
        "In order to get closer to Allah, make an Adhahi offering. Adhahi means “ To Sacrifice An Animal” in the way of Allah. It is a symbol to show your affection and love.",
    },
    {
      id: 9,
      title: "Shave Hair",
      imageUrl: "/assets/images/demo/journey/Shave_Hair_or_Trim.webp",
      description:
        "Cut or shave your hair. After that, take off your Ihram and put on your normal attire.",
    },
    {
      id: 10,
      title: "Tawaf Al-Ifada",
      imageUrl: "/assets/images/demo/journey/Tawaf_Al-Ifada.webp",
      description:
        "On your way back to Makkah, do the Tawaf Al-Ifada by walking around the Kaaba seven times, and then, if you can, give prayers (rakaat) behind Maqam Ibrahim",
    },
    {
      id: 11,
      title: "Pelting the three Jamarat",
      imageUrl: "/assets/images/demo/journey/Pelting_the_three_Jamarat.webp",
      description:
        "On the eleventh, twelfth, and optional thirteenth days of Dhul-Hijjah, return to Mina and take part in the throwing of the stone to the devil (Satan).",
    },
    {
      id: 12,
      title: "Tawaf Al-Wadaa",
      imageUrl: "/assets/images/demo/journey/Tawaf_Al-Wadaa.webp",
      description:
        "Perform the Tawaf Al-Wadaa, which involves going around the Kaaba seven times, before leaving Makkah.",
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
                      {/* {journey.type === "image" ? <GrGallery /> : <GrVideo />} */}
                      <GrGallery />
                    </div>
                  </div>
                  <div className="p-2">
                    <h2 className="post-title">{journey.title}</h2>
                  </div>
                </div>
                <div className="blog-image-wrapper">
                  <figure className="blog-image">
                    <img
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
