"use client";
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import SecondaryNavbar from './SecondaryNavbar';

const MainNavbarCom = () => {
    const pathname = usePathname();

    let content;
    switch (pathname) {
        case "/":
            content = <Navbar />;
            break;
        case "/contactus":
            content = <SecondaryNavbar heading="Contact Us" breadcrumbs={["home", "pages", "contact us"]} />;
            break;
        case "/about-us":
            content = <SecondaryNavbar heading="About" breadcrumbs={["home", "pages", "about us"]} />;
            break;
        case "/blogs":
            content = <SecondaryNavbar heading="Blogs" breadcrumbs={["home", "pages", "blogs"]} />;
            break;
        case "/packages":
            content = <SecondaryNavbar heading="Packages" breadcrumbs={["home", "pages", "packages"]} />;
        case "/apply-now":
            content = <SecondaryNavbar heading="Apply now" breadcrumbs={["home", "pages", "apply now"]} />;
            break;
        default:
            content = <SecondaryNavbar heading="" breadcrumbs={["home", "pages"]} />;
    }

    return <>{content}</>;
};

export default MainNavbarCom;
