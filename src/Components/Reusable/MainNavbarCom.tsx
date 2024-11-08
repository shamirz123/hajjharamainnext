"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import SecondaryNavbar from "./SecondaryNavbar";

const MainNavbarCom = () => {
  const pathname = usePathname();

  let content;
  switch (pathname) {
    case "/":
      content = <Navbar />;
      break;
    case "/contactus":
      content = (
        <SecondaryNavbar
          heading="Contact Us"
          image="/assets/images/demo/banners/contact_us.webp"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/contactus" },
            { name: "Contact Us", path: "/contactus" },
          ]}
        />
      );
      break;
    case "/about-us":
      content = (
        <SecondaryNavbar
          heading="About Us"
          image="/assets/images/demo/banners/about_us.webp"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/about-us" },
            { name: "About Us", path: "/about-us" },
          ]}
        />
      );
      break;
    case "/about-us/hajjguide":
      content = (
        <SecondaryNavbar
          heading="Hajj Guide"
          image="/assets/images/demo/boxed-img.jpg"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/about-us" },
            { name: "Hajj Guide", path: "/about-us/hajjguide" },
          ]}
        />
      );
      break;
    case "/about-us/journey":
      content = (
        <SecondaryNavbar
          heading="Journey"
          image="/assets/images/demo/boxed-img.jpg"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/about-us" },
            { name: "Journey", path: "/about-us/journey" },
          ]}
        />
      );
      break;
    case "/blogs":
      content = (
        <SecondaryNavbar
          heading="Blogs"
          image="/assets/images/demo/banners/blogs.webp"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/blogs" },
            { name: "Blogs", path: "/blogs" },
          ]}
        />
      );
      break;
    case "/packages":
      content = (
        <SecondaryNavbar
          heading="Packages"
          image="/assets/images/demo/banners/packages.webp"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/packages" },
            { name: "Packages", path: "/packages" },
          ]}
        />
      );
      break;
    case "/serviced-countries":
      content = (
        <SecondaryNavbar
          heading="Serviced Countries"
          image="/assets/images/demo/banners/served_countris.webp"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/serviced-countries" },
            { name: "Serviced Countries", path: "/serviced-countries" },
          ]}
        />
      );
      break;
    case "/apply-now":
      content = (
        <SecondaryNavbar
          heading="Apply Now"
          image="/assets/images/demo/boxed-img.jpg"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/apply-now" },
            { name: "Apply Now", path: "/apply-now" },
          ]}
        />
      );
      break;
    default:
      content = (
        <SecondaryNavbar
          image="/assets/images/demo/banners/"
          heading=""
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "#" },
          ]}
        />
      );
  }

  return <>{content}</>;
};

export default MainNavbarCom;
