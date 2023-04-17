import React from "react";
import "./brand.css";
import { google, atlassian, dropbox, shopify, slack } from "./import";

const Brand = () => {
  return (
    <div className="gpt3__brand">
      <div>
        <img className="google" src={google} alt="google" />
      </div>
      <div>
        <img className="atlassian" src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img className="slack" src={slack} alt="slack" />
      </div>
      <div>
        <img className="dropbox" src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img className="shopify" src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
