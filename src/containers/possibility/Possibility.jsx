import React from "react";
import "./possibility.css";
import featureImg from "../../assets/Feature Image.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility_left">
        <img src={featureImg} alt="Feature Image" />
      </div>

      <div className="gpt3__possibility_right">
        <h4>Request Early Access to Get Started</h4> <br />
        <h1>The possibilities are beyond your imagination</h1> <br />
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>{" "}
        <br />
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
