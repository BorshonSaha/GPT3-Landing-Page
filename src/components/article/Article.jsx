// rafce
import React from "react";
import "./article.css";

const Article = ({ imageUrl }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article_image">
        <img src={imageUrl} alt="Blog Image" />
      </div>
      <div className="gpt3__article_content">
        <div>
          <p>Sep 26, 2021</p>
          <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
