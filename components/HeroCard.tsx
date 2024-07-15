import { baseImgUrl } from "@lib/constant";
import { Movie } from "@lib/type.db";
import { InfoOutlined, PlayCircle, PlayCircleFilledOutlined } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const HeroCard = ({ trendingMovie }: { trendingMovie: Movie }) => {
  console.log(trendingMovie);
  
  return (
    <div className="hero">
      <div className="hero-bg">
        <img
          src={`${baseImgUrl}${
            trendingMovie?.backdrop_path || trendingMovie?.poster_path
          }`}
          alt="movie"  className="hero-bg-image"
        />
      <div className="overlay"></div>
      </div>
      <h1 className="hero-title">{trendingMovie?.title || trendingMovie?.name}</h1>

      <p className="hero-overview">{trendingMovie?.overview}</p>
      <div className="hero-btns">
        <button className="hero-btn"><PlayCircleFilledOutlined/>Play Now</button>
        <button className="hero-btn"><InfoOutlined/>More Info</button>

      </div>
    </div>
  );
};

export default HeroCard;
