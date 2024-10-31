import Image from "next/image";
import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Importing social media icons

function AboutUsTeam() {
  const teamMembers = [
    {
      name: "Mike Trout",
      role: "Web Designer",
      image: "/assets/images/demo/team1.jpg",
      description:
        "All work and no play, as they say, means something is askew with your life balance. Recognize that although your job and career are critical components of who you are.",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      name: "Miguel Cabrera",
      role: "Web Developer",
      image: "/assets/images/demo/team2.jpg",
      description:
        "All work and no play, as they say, means something is askew with your life balance. Recognize that although your job and career are critical components of who you are.",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      name: "Adam Jones",
      role: "CEO",
      image: "/assets/images/demo/team3.jpg",
      description:
        "All work and no play, as they say, means something is askew with your life balance. Recognize that although your job and career are critical components of who you are.",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div>
      <div>
        <div className="row mb50">
          {teamMembers.map((member, index) => (
            <div className="col-sm-6 col-md-4 sm-box3" key={index}>
              <div className="box-services-6 small-padding">
                <Image
                  src={member.image}
                  className="br2"
                  alt={member.name}
                  width={300}
                  height={250}
                />
                <h3 className="title-small mb10">
                  <a className="a-inherit mr20">{member.name}</a>
                  <small>{member.role}</small>
                </h3>
                <div className="br-bottom mb20"></div>
                <p>{member.description}</p>
                <div className="clearfix">
                  <ul className="about-team-icons social-bg rounded">
                    <li>
                      <a href={member.socialLinks.twitter} aria-label="Twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.socialLinks.facebook}
                        aria-label="Facebook"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.socialLinks.linkedin}
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUsTeam;
