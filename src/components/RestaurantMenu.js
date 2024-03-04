import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card.card.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {costForTwoMessage} - {cuisines.join(", ")}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((menu) => (
          <li key={menu.card.info.id}>
            {menu.card.info.name} - Rs.
            {menu.card.info.price / 100 || 500}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
