import HajjDestinations from "@/Components/Home/HajjDestination";
import HomeContent from "@/Components/Home/HomeContent";
import HomeFeatures from "@/Components/Home/HomeFeatures";
import LatestProjects from "@/Components/Home/LatestProjects";
import Testimonials from "@/Components/Home/Testimonial";
// import Testimonials from "@/Components/Home/Testimonial";
import WhatAboutUs from "@/Components/Home/WhatAboutUs";
import BrandLogos from "@/Components/Reusable/BrandLogo";
import DynamicBanner from "@/Components/Reusable/DynamicBanner";
// import DynamicBanner from "@/Components/Reusable/DynamicBanner";

export default function Home() {
  return (
    <>
      <DynamicBanner />
      {/* <HomeContent /> */}
      <HomeFeatures />
      <WhatAboutUs />
      {/* <Testimonials /> */}
      <LatestProjects/>
      <HajjDestinations />
      <BrandLogos />
    </>
  );
}
