import React from "react";
import MobApp from "./MobApp";
import WebApp from "./WebApp";
import CyberSecurityBlog from "./CyberSecurityBlog";
import CloudDevopsBlogs from "./CloudDevopsBlogs";
import AiAndMl from "./AiAndMl";
import TeamAugmentation from "./TeamAugmentation";
import OurBookBlog from "./OurBookBlog";

const ColumnBlogs = () => {
  return (
    <div>
      <WebApp />
      <OurBookBlog />
      <MobApp />
      <CyberSecurityBlog />
      <CloudDevopsBlogs />
      <AiAndMl />
      <TeamAugmentation />
    </div>
  );
};

export default ColumnBlogs;
