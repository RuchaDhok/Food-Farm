import RestaurantItemList from "./RestaurantItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <div className="w-6/12 bg-gray-50 mx-auto my-2 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            setFlag(!flag);
          }}
        >
          <span className="font-[600] text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="font-medium text-xl cursor-pointer">
            {flag ? "🔼" : "🔽"}
          </span>
        </div>
        {flag && <RestaurantItemList itemList={data.itemCards} />}
      </div>
    </>
  );
};

export default RestaurantCategory;
