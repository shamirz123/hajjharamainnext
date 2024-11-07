import Link from "next/link";
import React from "react";
import {
  FaEdit,
  FaImage,
  FaRegFileAlt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";

const sections = [
  {
    title: "Oceania",
    links: [
      { label: "American Samoa", icon: <FaHouseChimneyUser /> },
      { label: "Cook Islands", icon: <FaHouseChimneyUser /> },
      { label: "Fiji", icon: <FaHouseChimneyUser /> },
      { label: "French Polynesia", icon: <FaHouseChimneyUser /> },
      { label: "Guadeloupe", icon: <FaHouseChimneyUser /> },
      { label: "Kiribati", icon: <FaHouseChimneyUser /> },
      { label: "Marshall Islands", icon: <FaHouseChimneyUser /> },
      { label: "Micronesia", icon: <FaHouseChimneyUser /> },
      { label: "New Caledonia", icon: <FaHouseChimneyUser /> },
      { label: "New Zealand", icon: <FaHouseChimneyUser /> },
      { label: "Niue", icon: <FaHouseChimneyUser /> },
      {
        label: "Northern Marianas Islands",
        icon: <FaHouseChimneyUser />,
        href: "#",
      },
      { label: "Papua New Guinea", icon: <FaHouseChimneyUser /> },
      { label: "Niue", icon: <FaHouseChimneyUser /> },
      { label: "Solomon Islands", icon: <FaHouseChimneyUser /> },
      { label: "Tokelau", icon: <FaHouseChimneyUser /> },
      { label: "Tonga Islands", icon: <FaHouseChimneyUser /> },
      { label: "Tuvalu", icon: <FaHouseChimneyUser /> },
      { label: "Vanuatu", icon: <FaHouseChimneyUser /> },
      {
        label: "Wallis and Futuna Islands",
        icon: <FaHouseChimneyUser />,
        href: "#",
      },
      { label: "Western Samoa", icon: <FaHouseChimneyUser /> },
    ],
  },
  {
    title: "North America",
    links: [
      { label: "Anguilla", icon: <FaEdit /> },
      { label: "Antigua and Barbuda", icon: <FaEdit /> },
      { label: "Bahamas", icon: <FaEdit /> },
      { label: "Barbados", icon: <FaEdit /> },
      { label: "Belize", icon: <FaEdit /> },
      { label: "Bermuda", icon: <FaEdit /> },
      { label: "British Virgin Islands", icon: <FaEdit /> },
      { label: "Canada", icon: <FaEdit /> },
      { label: "Costa Rica", icon: <FaUser /> },
      { label: "Cuba", icon: <FaUser /> },
      { label: "Dominica", icon: <FaUser /> },
      { label: "Dominican Republic", icon: <FaUser /> },
      { label: "Grenada", icon: <FaUser /> },
      { label: "Guam", icon: <FaUser /> },
      { label: "Guatemala", icon: <FaUser /> },
      { label: "Haiti", icon: <FaUser /> },
      { label: "Honduras", icon: <FaUser /> },
      { label: "Jamaica", icon: <FaUser /> },
      { label: "Martinique", icon: <FaUser /> },
      { label: "Mexico", icon: <FaUser /> },
      { label: "Montserrat", icon: <FaUser /> },
      { label: "Nicaragua", icon: <FaUser /> },
      { label: "Panama", icon: <FaUser /> },
      { label: "Puerto Rico", icon: <FaUser /> },
      { label: "Saint Kitts and Nevis", icon: <FaUser /> },
      { label: "Saint Lucia", icon: <FaUser /> },
      { label: "Saint Pierre and Miquelon", icon: <FaUser /> },
      {
        label: "Saint Vincent and the Grenadines",
        icon: <FaUser />,
        href: "#",
      },
      { label: "Salvador", icon: <FaUser /> },
      { label: "Trinidad and Tobago", icon: <FaUser /> },
      { label: "Turks and Caicos Islands", icon: <FaUser /> },
      { label: "United States of America", icon: <FaUser /> },
      { label: "US Virgin Islands", icon: <FaUser /> },
      { label: "Honduras", icon: <FaUser /> },
    ],
  },
  {
    title: "South America",
    links: [
      { label: "Argentina", icon: <FaImage /> },
      { label: "Aruba", icon: <FaImage /> },
      { label: "Bolivia", icon: <FaImage /> },
      { label: "Brazil", icon: <FaImage /> },
      { label: "Chile", icon: <FaImage /> },
      { label: "Colombia", icon: <FaImage /> },
      { label: "Ecuador", icon: <FaImage /> },
      { label: "Falkland Islands", icon: <FaImage /> },
      { label: "French Guiana", icon: <FaImage /> },
      { label: "Guyana", icon: <FaImage /> },
      { label: "Paraguay", icon: <FaImage /> },
      { label: "Peru", icon: <FaImage /> },
      { label: "Suriname", icon: <FaImage /> },
      { label: "Uruguay", icon: <FaImage /> },
      { label: "Venezuela", icon: <FaImage /> },
    ],
  },
  {
    title: "Europe",
    links: [
      { label: "Andorra", icon: <FaShoppingCart /> },
      { label: "Armenia", icon: <FaShoppingCart /> },
      { label: "Austria", icon: <FaShoppingCart /> },
      { label: "Belarus", icon: <FaShoppingCart /> },
      { label: "Belgium", icon: <FaUser /> },
      { label: "Bulgaria", icon: <FaShoppingCart /> },
      { label: "Croatia", icon: <FaRegFileAlt /> },
      { label: "Cyprus", icon: <FaRegFileAlt /> },
      { label: "Czech Republic", icon: <FaRegFileAlt /> },
      { label: "Denmark", icon: <FaRegFileAlt /> },
      { label: "Estonia", icon: <FaRegFileAlt /> },
      { label: "Faroe Islands", icon: <FaRegFileAlt /> },
      { label: "Finland", icon: <FaRegFileAlt /> },
      { label: "France", icon: <FaRegFileAlt /> },
      { label: "Georgia", icon: <FaRegFileAlt /> },
      { label: "Germany", icon: <FaRegFileAlt /> },
      { label: "Gibraltar", icon: <FaRegFileAlt /> },
      { label: "Greece", icon: <FaRegFileAlt /> },
      { label: "Hungary", icon: <FaRegFileAlt /> },
      { label: "Iceland", icon: <FaRegFileAlt /> },
      { label: "Ireland", icon: <FaRegFileAlt /> },
      { label: "Italy", icon: <FaRegFileAlt /> },
      { label: "Latvia", icon: <FaRegFileAlt /> },
      { label: "Liechtenstein", icon: <FaRegFileAlt /> },
      { label: "Lithuania", icon: <FaRegFileAlt /> },
      { label: "Luxembourg", icon: <FaRegFileAlt /> },
      { label: "Malta", icon: <FaRegFileAlt /> },
      { label: "Moldavia", icon: <FaRegFileAlt /> },
      { label: "Monaco", icon: <FaRegFileAlt /> },
      { label: "Netherlands", icon: <FaRegFileAlt /> },
      { label: "Romania", icon: <FaRegFileAlt /> },
      { label: "Portugal", icon: <FaRegFileAlt /> },
      { label: "Poland", icon: <FaRegFileAlt /> },
      { label: "San Marino", icon: <FaRegFileAlt /> },
      { label: "Serbia", icon: <FaRegFileAlt /> },
      { label: "Spain", icon: <FaRegFileAlt /> },
      { label: "St. Helena", icon: <FaRegFileAlt /> },
      { label: "Sweden", icon: <FaRegFileAlt /> },
      { label: "Switzerland", icon: <FaRegFileAlt /> },
      { label: "Ukraine", icon: <FaRegFileAlt /> },
      { label: "United Kingdom", icon: <FaRegFileAlt /> },
    ],
  },
  {
    title: "Africa",
    links: [
      { label: "Eswatini (Swaziland)", icon: <FaRegFileAlt /> },
      { label: "Botswana", icon: <FaRegFileAlt /> },
      { label: "Lesotho", icon: <FaRegFileAlt /> },
      { label: "Mayotte Island", icon: <FaRegFileAlt /> },
      { label: "Reunion Island", icon: <FaRegFileAlt /> },
      { label: "Seychelles", icon: <FaRegFileAlt /> },
    ],
  },
  {
    title: "Asia",
    links: [
      { label: "Japan", icon: <FaRegFileAlt /> },
      { label: "South Korea", icon: <FaRegFileAlt /> },
    ],
  },
];
function ServicedCountries() {
  return (
    <div>
      <section className="section-page mb40 mt20">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {sections.map((section, index) => (
                <div key={index}>
                  <h3 className="title-a">{section.title}</h3>
                  <div className="row">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="col-sm-6 col-md-4 sm-box">
                        <ul className="sitemap-list">
                          <li>
                            <span>
                              <div className="d-flex align-items-center">
                                <div className="icon me-2">{link.icon}</div>
                                <span>{link.label}</span>
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="simple-hr" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicedCountries;
