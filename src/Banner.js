import React from "react";
import "./Banner.css";
import BannerImg from "./assets/Cover.png";

function Banner() {
  
  function truncade(string,n) {
    return string?.length > n ? string.substring(0,n-1) + '...' : string
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${BannerImg})`,
        backgroundPosition: "center center",
      }}
    >
      
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Plat</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncade(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          laudantium reprehenderit facilis aliquam optio nulla similique quidem,
          iure quam officiis at expedita molestias odit pariatur dignissimos
          repellendus consectetur neque id.`,150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
