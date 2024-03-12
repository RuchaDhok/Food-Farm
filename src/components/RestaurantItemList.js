import { DISH_IMAGE } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const RestaurantItemList = ({ itemList }) => {
  console.log("itemList -- " + itemList);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  function handleAddItem(item, index) {
    //dispatch an action
    dispatch(addItem(item));
    setCount((count) => ({
      ...count,
      [item.card.info.id]: (count[item.card.info.id] || 0) + 1,
    }));
    setSelectedItem(item.card.info.id);

    // behind the scenes
    // {
    //   payload: "pizza";
    // }
  }

  return (
    <div className="bg-gray-50 mx-auto ">
      {itemList?.map((item, index) => (
        <div
          key={item.card.info.id}
          className="flex justify-between border-b-2 pb-2 border-slate-[150]"
        >
          <div className="flex flex-col text-left pt-6 pl-4 w-9/12">
            <h3 className="font-[400]">
              {item.card.info.name} - ₹{item.card.info.price / 100 || 295}
            </h3>
            <p className="text-[11px] pt-2">{item.card.info.description}</p>
          </div>
          <div className="p-4 w-3/12 relative">
            <div className="absolute bottom-0 inset-x-0">
              <button
                className="bg-white shadow-xl p-2 rounded-lg m-auto"
                onClick={() => handleAddItem(item, index)}
              >
                {selectedItem === item.card.info.id ? (
                  <div className="flex justify-between">
                    <span className="w-5">-</span>
                    {count[item.card.info.id] || 0}
                    <span className="w-5">+</span>
                  </div>
                ) : (
                  "Add +"
                )}
              </button>
            </div>
            <img
              className="w-[130px] m-2 rounded-2xl "
              src={DISH_IMAGE + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantItemList;
