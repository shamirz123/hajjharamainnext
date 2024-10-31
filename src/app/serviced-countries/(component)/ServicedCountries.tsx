import Link from "next/link";
import React from "react";
import { FaEdit, FaImage, FaRegFileAlt, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";

const sections = [
  {
    title: "Home Pages",
    links: [
      { label: "Business", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "Agency", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "Creative", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "Parallax", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "Portfolio", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "Blog", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "E-commerce", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "Personal", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "Coming Soon", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "One Page", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "Landing", icon: <FaHouseChimneyUser />, href: "#" },
      { label: "Application", icon: <FaHouseChimneyUser />, href: "#" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "Grid", icon: <FaEdit />, href: "#" },
      { label: "Grid Sidebar", icon: <FaEdit />, href: "#" },
      { label: "Masonry", icon: <FaEdit />, href: "#" },
      { label: "Masonry Sidebar", icon: <FaEdit />, href: "#" },
      { label: "List Large", icon: <FaEdit />, href: "#" },
      { label: "List Small", icon: <FaEdit />, href: "#" },
      { label: "Post", icon: <FaEdit />, href: "#" },
      { label: "Post Sidebar", icon: <FaEdit />, href: "#" },
      { label: "Author", icon: <FaUser />, href: "#" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "Boxed", icon: <FaImage />, href: "#" },
      { label: "Grid", icon: <FaImage />, href: "#" },
      { label: "Masonry", icon: <FaImage />, href: "#" },
      { label: "Full width", icon: <FaImage />, href: "#" },
      { label: "Modal", icon: <FaImage />, href: "#" },
      { label: "Carousel", icon: <FaImage />, href: "#" },
      { label: "Text", icon: <FaImage />, href: "#" },
      { label: "Sidebar", icon: <FaImage />, href: "#" },
      { label: "Filterable", icon: <FaImage />, href: "#" },
      { label: "Ajax load more", icon: <FaImage />, href: "#" },
      { label: "Project Half", icon: <FaImage />, href: "#" },
      { label: "Project Full", icon: <FaImage />, href: "#" },
      { label: "Project Sidebar", icon: <FaImage />, href: "#" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Products", icon: <FaShoppingCart />, href: "#" },
      { label: "Products Sidebar", icon: <FaShoppingCart />, href: "#" },
      { label: "Product", icon: <FaShoppingCart />, href: "#" },
      { label: "Product Sidebar", icon: <FaShoppingCart />, href: "#" },
      { label: "Account", icon: <FaUser />, href: "#" },
      { label: "Cart", icon: <FaShoppingCart />, href: "#" },
      { label: "Checkout", icon: <FaRegFileAlt />, href: "#" },
    ],
  },
  {
    title: "Pages",
    links: [
      { label: "About", icon: <FaRegFileAlt />, href: "#" },
      { label: "Team", icon: <FaRegFileAlt />, href: "#" },
      { label: "Contact", icon: <FaRegFileAlt />, href: "#" },
      { label: "Services", icon: <FaRegFileAlt />, href: "#" },
      { label: "Sitemap", icon: <FaRegFileAlt />, href: "#" },
      { label: "Careers", icon: <FaRegFileAlt />, href: "#" },
      { label: "Pricing", icon: <FaRegFileAlt />, href: "#" },
      { label: "Clients", icon: <FaRegFileAlt />, href: "#" },
      { label: "Employee", icon: <FaRegFileAlt />, href: "#" },
      { label: "FAQ", icon: <FaRegFileAlt />, href: "#" },
      { label: "404 not Found", icon: <FaRegFileAlt />, href: "#" },
      { label: "403 Forbidden", icon: <FaRegFileAlt />, href: "#" },
      { label: "500 Server Error", icon: <FaRegFileAlt />, href: "#" },
      { label: "Maintenance", icon: <FaRegFileAlt />, href: "#" },
      { label: "Search Results", icon: <FaRegFileAlt />, href: "#" },
      { label: "Full width", icon: <FaRegFileAlt />, href: "#" },
      { label: "Sidebar Left", icon: <FaRegFileAlt />, href: "#" },
      { label: "Sidebar Right", icon: <FaRegFileAlt />, href: "#" },
      { label: "Dual Sidebar", icon: <FaRegFileAlt />, href: "#" },
      { label: "Side Navigation", icon: <FaRegFileAlt />, href: "#" },
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
                            <Link href={link.href}>
                              <div className="d-flex align-items-center">
                                <div className="icon me-2">{link.icon}</div>
                                <span>{link.label}</span>
                              </div>
                            </Link>
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
