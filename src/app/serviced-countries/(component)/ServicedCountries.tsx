import React from "react";
import { MdLocationPin } from "react-icons/md";

const sections = [
  {
    title: "Oceania",
    links: [
      { label: "American Samoa", icon: <MdLocationPin  /> },
      { label: "Cook Islands", icon: <MdLocationPin  /> },
      { label: "Fiji", icon: <MdLocationPin  /> },
      { label: "French Polynesia", icon: <MdLocationPin  /> },
      { label: "Guadeloupe", icon: <MdLocationPin  /> },
      { label: "Kiribati", icon: <MdLocationPin  /> },
      { label: "Marshall Islands", icon: <MdLocationPin  /> },
      { label: "Micronesia", icon: <MdLocationPin  /> },
      { label: "New Caledonia", icon: <MdLocationPin  /> },
      { label: "New Zealand", icon: <MdLocationPin  /> },
      { label: "Niue", icon: <MdLocationPin  /> },
      {
        label: "Northern Marianas Islands",
        icon: <MdLocationPin  />,
        href: "#",
      },
      { label: "Papua New Guinea", icon: <MdLocationPin  /> },
      { label: "Niue", icon: <MdLocationPin  /> },
      { label: "Solomon Islands", icon: <MdLocationPin  /> },
      { label: "Tokelau", icon: <MdLocationPin  /> },
      { label: "Tonga Islands", icon: <MdLocationPin  /> },
      { label: "Tuvalu", icon: <MdLocationPin  /> },
      { label: "Vanuatu", icon: <MdLocationPin  /> },
      {
        label: "Wallis and Futuna Islands",
        icon: <MdLocationPin  />,
        href: "#",
      },
      { label: "Western Samoa", icon: <MdLocationPin  /> },
    ],
  },
  {
    title: "North America",
    links: [
      { label: "Anguilla", icon: <MdLocationPin  /> },
      { label: "Antigua and Barbuda", icon: <MdLocationPin  /> },
      { label: "Bahamas", icon: <MdLocationPin  /> },
      { label: "Barbados", icon: <MdLocationPin  /> },
      { label: "Belize", icon: <MdLocationPin  /> },
      { label: "Bermuda", icon: <MdLocationPin  /> },
      { label: "British Virgin Islands", icon: <MdLocationPin  /> },
      { label: "Canada", icon: <MdLocationPin  /> },
      { label: "Costa Rica", icon: <MdLocationPin  /> },
      { label: "Cuba", icon: <MdLocationPin  /> },
      { label: "Dominica", icon: <MdLocationPin  /> },
      { label: "Dominican Republic", icon: <MdLocationPin  /> },
      { label: "Grenada", icon: <MdLocationPin  /> },
      { label: "Guam", icon: <MdLocationPin  /> },
      { label: "Guatemala", icon: <MdLocationPin  /> },
      { label: "Haiti", icon: <MdLocationPin  /> },
      { label: "Honduras", icon: <MdLocationPin  /> },
      { label: "Jamaica", icon: <MdLocationPin  /> },
      { label: "Martinique", icon: <MdLocationPin  /> },
      { label: "Mexico", icon: <MdLocationPin  /> },
      { label: "Montserrat", icon: <MdLocationPin  /> },
      { label: "Nicaragua", icon: <MdLocationPin  /> },
      { label: "Panama", icon: <MdLocationPin  /> },
      { label: "Puerto Rico", icon: <MdLocationPin  /> },
      { label: "Saint Kitts and Nevis", icon: <MdLocationPin  /> },
      { label: "Saint Lucia", icon: <MdLocationPin  /> },
      { label: "Saint Pierre and Miquelon", icon: <MdLocationPin  /> },
      {
        label: "Saint Vincent and the Grenadines",
        icon: <MdLocationPin  />,
        href: "#",
      },
      { label: "Salvador", icon: <MdLocationPin  /> },
      { label: "Trinidad and Tobago", icon: <MdLocationPin  /> },
      { label: "Turks and Caicos Islands", icon: <MdLocationPin  /> },
      { label: "United States of America", icon: <MdLocationPin  /> },
      { label: "US Virgin Islands", icon: <MdLocationPin  /> },
      { label: "Honduras", icon: <MdLocationPin  /> },
    ],
  },
  {
    title: "South America",
    links: [
      { label: "Argentina", icon: <  MdLocationPin  /> },
      { label: "Aruba", icon: <  MdLocationPin  /> },
      { label: "Bolivia", icon: <  MdLocationPin  /> },
      { label: "Brazil", icon: <  MdLocationPin  /> },
      { label: "Chile", icon: <  MdLocationPin  /> },
      { label: "Colombia", icon: <  MdLocationPin  /> },
      { label: "Ecuador", icon: <  MdLocationPin  /> },
      { label: "Falkland Islands", icon: <  MdLocationPin  /> },
      { label: "French Guiana", icon: <  MdLocationPin  /> },
      { label: "Guyana", icon: <  MdLocationPin  /> },
      { label: "Paraguay", icon: <  MdLocationPin  /> },
      { label: "Peru", icon: <  MdLocationPin  /> },
      { label: "Suriname", icon: <  MdLocationPin  /> },
      { label: "Uruguay", icon: <  MdLocationPin  /> },
      { label: "Venezuela", icon: <  MdLocationPin  /> },
    ],
  },
  {
    title: "Europe",
    links: [
      { label: "Andorra", icon: <MdLocationPin /> },
      { label: "Armenia", icon: <MdLocationPin /> },
      { label: "Austria", icon: <MdLocationPin /> },
      { label: "Belarus", icon: <MdLocationPin /> },
      { label: "Belgium", icon: <MdLocationPin  /> },
      { label: "Bulgaria", icon: <MdLocationPin /> },
      { label: "Croatia", icon: <MdLocationPin /> },
      { label: "Cyprus", icon: <MdLocationPin /> },
      { label: "Czech Republic", icon: <MdLocationPin /> },
      { label: "Denmark", icon: <MdLocationPin /> },
      { label: "Estonia", icon: <MdLocationPin /> },
      { label: "Faroe Islands", icon: <MdLocationPin /> },
      { label: "Finland", icon: <MdLocationPin /> },
      { label: "France", icon: <MdLocationPin /> },
      { label: "Georgia", icon: <MdLocationPin /> },
      { label: "Germany", icon: <MdLocationPin /> },
      { label: "Gibraltar", icon: <MdLocationPin /> },
      { label: "Greece", icon: <MdLocationPin /> },
      { label: "Hungary", icon: <MdLocationPin /> },
      { label: "Iceland", icon: <MdLocationPin /> },
      { label: "Ireland", icon: <MdLocationPin /> },
      { label: "Italy", icon: <MdLocationPin /> },
      { label: "Latvia", icon: <MdLocationPin /> },
      { label: "Liechtenstein", icon: <MdLocationPin /> },
      { label: "Lithuania", icon: <MdLocationPin /> },
      { label: "Luxembourg", icon: <MdLocationPin /> },
      { label: "Malta", icon: <MdLocationPin /> },
      { label: "Moldavia", icon: <MdLocationPin /> },
      { label: "Monaco", icon: <MdLocationPin /> },
      { label: "Netherlands", icon: <MdLocationPin /> },
      { label: "Romania", icon: <MdLocationPin /> },
      { label: "Portugal", icon: <MdLocationPin /> },
      { label: "Poland", icon: <MdLocationPin /> },
      { label: "San Marino", icon: <MdLocationPin /> },
      { label: "Serbia", icon: <MdLocationPin /> },
      { label: "Spain", icon: <MdLocationPin /> },
      { label: "St. Helena", icon: <MdLocationPin /> },
      { label: "Sweden", icon: <MdLocationPin /> },
      { label: "Switzerland", icon: <MdLocationPin /> },
      { label: "Ukraine", icon: <MdLocationPin /> },
      { label: "United Kingdom", icon: <MdLocationPin /> },
    ],
  },
  {
    title: "Africa",
    links: [
      { label: "Eswatini (Swaziland)", icon: <MdLocationPin /> },
      { label: "Botswana", icon: <MdLocationPin /> },
      { label: "Lesotho", icon: <MdLocationPin /> },
      { label: "Mayotte Island", icon: <MdLocationPin /> },
      { label: "Reunion Island", icon: <MdLocationPin /> },
      { label: "Seychelles", icon: <MdLocationPin /> },
    ],
  },
  {
    title: "Asia",
    links: [
      { label: "Japan", icon: <MdLocationPin /> },
      { label: "South Korea", icon: <MdLocationPin /> },
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
