import RestaurantItemList from "./RestaurantItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //To optimize the performance. subscribe to the right store slice
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="p-4 m-4 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems?.length !== 0 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems?.length === 0 && (
          <h1 className="p-4 m-4 font-serif text-2xl">
            Cart is empty. Add Items to your cart
          </h1>
        )}
        <RestaurantItemList itemList={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
