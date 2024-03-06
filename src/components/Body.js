import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";
//import resList from "../utils/mockData";

const Body = () => {
  const [flag, setFlag] = useState(true);
  const [searchText, setSearchText] = useState("");

  const [originalList, listOfRestaurants, setListOfRestaurants] =
    useRestaurantData();

  //Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <>
        <h1>Looks like you're offline!!</h1>
        <h2> Please check your internet connection.</h2>
      </>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              if (e.target.value == "") {
                setSearchText("");
                setListOfRestaurants(originalList);
              }
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() =>
              setListOfRestaurants(
                listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              )
            }
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic
            if (flag == true) {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setListOfRestaurants(filteredList);
              setFlag(false);
            } else {
              setListOfRestaurants(originalList);
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
          <Link key={resObj.info.id} to={"/restaurants/" + resObj.info.id}>
            {" "}
            <RestaurantCard resData={resObj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
