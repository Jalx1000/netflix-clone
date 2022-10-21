import React, { useEffect, useState } from "react";
import "./Nav.css";
import NetflixLogoSvg from "./assets/NetflixLogoSvg.svg";
import Profile from "./assets/Profiles/ProfilePicture.png";

function Nav() {
  const [Show, setShow] = useState(false);
  const transitionNavBar = () => {
    /* if(window.scrollY > 100) {
      setShow(true);
    }else{
      setShow(false);
    } */
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.addEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${Show && "nav__black"}`}>
      {/* <div className={`nav nav__black`}> */}
      <div className="nav_contents">
        <img className="nav_logo" src={NetflixLogoSvg} alt="Netflix" />

        <img className="nav_avatar" src={Profile} alt="perfil" />
      </div>
    </div>
  );
}

export default Nav;
