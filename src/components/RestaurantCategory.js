import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = ({ data, flag, setShowIndex }) => {
  return (
    <>
      <div className="w-6/12 bg-gray-50 mx-auto my-2 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            setShowIndex();
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
