import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog1, blog2, blog3, blog4, blog5 } from "./import";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog_heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>

      <div className="gpt3__blog_container">
        <div className="gpt3__blog_container-group_A">
          <Article imageUrl={blog1} />
        </div>

        <div className="gpt3__blog_container-group_B">
          <Article imageUrl={blog2} />
          <Article imageUrl={blog3} />
          <Article imageUrl={blog4} />
          <Article imageUrl={blog5} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
