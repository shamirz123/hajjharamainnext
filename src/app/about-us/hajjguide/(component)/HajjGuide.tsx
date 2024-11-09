"use client";
import Image from "next/image";
import React from "react";
import { GrGallery } from "react-icons/gr";

function HajjGuide() {
  const hajjGuideData = [
    {
      title: "Cecillia and the Satellite",
      imageSrc: "/assets/images/demo/hajjguide/tawaf-image.webp",
      imageAlt: "blog post",
      description:
        "As you put together your list of goals, you need to consider the five core aspects of wants that I cover in this section. My mentor Jim Rohn taught them to me when I was in my 20s. These five questions dramatically reduced the amount of time I needed to achieve many of the goals that are now crossed off my goal sheets, and these same questions can help you expand your thinking.",
    },
    {
      title: "The Kaaba and Tawaf",
      imageSrc: "/assets/images/demo/hajjguide/tawaf-image.webp",
      imageAlt: "Kaaba and Tawaf",
      description:
        "The Kaaba, a beautiful cube-shaped building inside Makkah’s Grand Mosque, is of great importance. It is the center point of the Hajj. In Tawaf, pilgrims walk around the Kaaba seven times, symbolizing unity and submission to Allah.",
    },
    {
      title: "Muzdalifah and Rami",
      imageSrc: "/assets/images/demo/hajjguide/hajj-guide-image-1.webp",
      imageAlt: "Muzdalifah and Rami",
      description:
        "At Muzdalifah, pilgrims gather pebbles to throw at the three stone pillars in Mina, symbolizing the rejection of evil. This ritual, echoing Prophet Ibrahim's resistance to temptation, unifies Muslims in their shared purpose and commitment.",
    },
    {
      title: "Sa'i",
      imageSrc: "/assets/images/demo/hajjguide/sai-image.webp",
      imageAlt: "Sa'i",
      description:
        "After Tawaf, believers perform Sa’i by walking seven times between the hills of Safa and Marwah. This ritual commemorates the story of Hajar’s search for water for her son Ismail, strengthening the bond of the Islamic community.",
    },
    {
      title: "Tawaf Al-Ifadhah and Tawaf Al-Wadaa",
      imageSrc: "/assets/images/demo/hajjguide/tawaf-al-wadaa.webp",
      imageAlt: "Tawaf Al-Ifadhah and Tawaf Al-Wadaa",
      description:
        "After completing Hajj, pilgrims return to the Kaaba for Tawaf Al-Ifadhah, marking the completion of main rituals. They then perform Tawaf Al-Wadaa, symbolizing the timeless principles of equality and devotion to Allah's will.",
    },
    {
      title: "Sacrifice and the Feast",
      imageSrc: "/assets/images/demo/hajjguide/hajj-guide-image-2.webp",
      imageAlt: "Sacrifice and the Feast",
      description:
        "Pilgrims sacrifice an animal as a tribute to Allah, commemorating Prophet Ibrahim’s willingness to sacrifice his son. The meat is distributed to those in need, embodying compassion and the Islamic principle of sharing.",
    },
    {
      title: "The Day of Arafat",
      imageSrc: "/assets/images/demo/hajjguide/arfaat-day.webp",
      imageAlt: "The Day of Arafat",
      description:
        "The Hajj reaches its peak on the Day of Arafat, where pilgrims gather to seek Allah’s mercy and forgiveness. This day is a profound moment for reflection, drawing Muslims closer to Allah. For non-pilgrims, fasting on this day is recommended and is believed to atone for sins of the previous and upcoming years.",
    },
  ];

  return (
    <>
      <div className="container container-area">
        <div className="row">
          {hajjGuideData.map((item, index) => (
            <div
              key={index}
              className={index === 0 ? "col-lg-12 col-md-12 col-sm-12" : "col-lg-6 col-md-6 col-sm-12"}
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