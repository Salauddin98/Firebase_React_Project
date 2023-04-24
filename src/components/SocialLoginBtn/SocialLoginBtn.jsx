import React from "react";
import "./Social.css";

const SocialLoginBtn = () => {
  return (
    <div className=" social-button-container w-75 mx-auto mb-4">
      <div className="">
        <img
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLoginBtn;
