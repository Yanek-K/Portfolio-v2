import React from "react";
import Navbar from "../../Components/Navbar";
import FixedIcons from "../../Components/FixedIcons";
import { posts } from "./posts";
import Footer from "../../Components/Footer";
import Bloglist from "../../Components/Blog";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <FixedIcons />
      <Bloglist posts={posts} />
      <Footer />
    </div>
  );
};

export default Blog;
