import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constant";

const useRestaurantData = () => {
  const [originalList, setOriginalList] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
  return [originalList, listOfRestaurants, setListOfRestaurants];
};

export default useRestaurantData;
