import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cartSlice";
import MenuItem from "./RestaurantDetails/MenuItem";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl mb-4 font-bold">Cart</h1>
      <button
        hidden={!items.length}
        className="p2 m2 bg-black text-white rounded-lg"
        onClick={() => dispatch(clearCart())}
      >
        Clear cart
      </button>

      <div className="w-6/12 m-auto">
        {items.length ? (
          items.map((item, i) => <MenuItem key={`item${i + 1}`} item={item} />)
        ) : (
          <h1>No Items in Cart</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
