import React from "react";
import "./Nav.css";
import NetflixLogoSvg from "./assets/NetflixLogoSvg.svg";
import Profile from "./assets/Profiles/ProfilePicture.png";

function Nav() {
  return (
    <div className="nav nav__black">
      <div className="nav_contents">
        <img 
        className="nav_logo"   
        src={NetflixLogoSvg} 
        alt="Netflix" 
        />

        <img 
        className="nav_avatar" 
        src={Profile} 
        alt="perfil" 
        />
      </div>
    </div>
  );
}

export default Nav;
