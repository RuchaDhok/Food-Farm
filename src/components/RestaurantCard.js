import React, { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props?.resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg shadow-lg hover:bg-gray-100">
      <img
        className="rounded-lg object-cover h-48 w-96"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg p-2 m-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
