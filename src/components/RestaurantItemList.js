import { DISH_IMAGE } from "../utils/constant";

const RestaurantItemList = ({ itemList }) => {
  return (
    <div className="bg-gray-50 mx-auto ">
      {itemList.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between border-b-2 pb-2 border-slate-[150]"
        >
          <div className="flex flex-col text-left pt-6 pl-4 w-9/12">
            <h3 className="font-[400]">{item.card.info.name} </h3>
            <p className="text-[11px] pt-2">{item.card.info.description}</p>
          </div>
          <div className="p-4 w-3/12 relative">
            <div className="absolute bottom-0 inset-x-0">
              <button className="bg-white shadow-xl p-2 rounded-lg m-auto ">
                Add +
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
