import { useStoreContext } from "../components/utils/GlobalState";
import { useContext, useEffect } from "react";
import "./CartItem.css";
import CoffeeDrinkImg from "../pages/CoffeeDrinkImg";
import CartContext from "../contexts/Cart/CartContext";
import Items from "../pages/MenuData";

const priceMap = {
  small: "price_sm",
  medium: "price_md",
  large: "price_lg",
};
const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  const { name, price, size, quantity, _id } = item;
  // const { name, img_url, size, quantity } = items;
  return (
    <div className="CartItem__item">
      <div className="col">
        <li>
          <img
            src={"CoffeeDrinkImg[img_url]"}
            className="card-img-top img-size target"
            alt="name"
          />
          <h4 className="card-title">
            {name} x {quantity}
          </h4>
          c<div>$ {price * quantity}</div>
        </li>

        <button className="CartItem__button" onClick={() => removeItem(_id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
