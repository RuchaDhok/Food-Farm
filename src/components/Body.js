import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [flag, setFlag] = useState(true);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic
            if (flag == true) {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfRestaurants(filteredList);
              setFlag(false);
            } else {
              setListOfRestaurants(resList);
              setFlag(true);
            }
          }}
        >
          {flag ? "Top Rated Restaurants" : "All Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} /> */}
        {listOfRestaurants.map((resObj) => (
          <RestaurantCard key={resObj.info.id} resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
