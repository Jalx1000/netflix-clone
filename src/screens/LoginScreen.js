import "./LoginScreen.css";

import React from "react";

function LoginLoginScreen() {
  const cover =
    "https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/10950ffa-a240-4d8e-b3ff-fc8953361818/BO-es-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg";
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img 
          className="loginScreen__logo" 
          src={cover} 
          alt="Cover" />
      </div>
    </div>
  );
}

export default LoginLoginScreen;
