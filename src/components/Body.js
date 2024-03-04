import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constant";
import { Link } from "react-router-dom";
//import resList from "../utils/mockData";

const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [flag, setFlag] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const restroInfo =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setOriginalList(restroInfo);
    setListOfRestaurants(restroInfo);
  };

  //Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
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
                (res) => res.info.avgRating > 4.5
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
