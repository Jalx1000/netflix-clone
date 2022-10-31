import "./LoginScreen.css";
import React from "react";

function LoginLoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen__logo"
          src="https://top10.netflix.com/images/logo.png"
          alt="Netflix"
        />
        <button className="loginScreen__button">Sign In</button>
        
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        
        <>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="loginScreen__input">
            <form>
              <input type="email" placeholder="Email Addres" />
              <button className="loginScreen__getStarted">GET STARTED</button>
            </form>
          </div>

        </>

      </div>
    </div>
  );
}

export default LoginLoginScreen;
