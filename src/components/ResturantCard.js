import React from "react";
import { IMG_CDN_URL } from "./config";

const ResturantCard = ({resturant}) => {
    const {name,cuisines,avgRating,cloudinaryImageId}=resturant.info
    return (
      <div className="resturantCard">
        <img alt="Restaurant Card" id="cardimg" src={IMG_CDN_URL+cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{avgRating} star</h4>
      </div>
    );
  };

  export default ResturantCard;
  