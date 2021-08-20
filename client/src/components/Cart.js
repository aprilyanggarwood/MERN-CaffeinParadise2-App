import { useContext } from "react";

import CartContext from "../contexts/Cart/CartContext";
import "./Cart.css";
// import CartItem from "./CartItem";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  console.log(showCart, cartItems);
  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="cart__innerWrapper">
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item, i) => (
                  <div key={i}>
                    <h2>{item.name}</h2>
                  </div>
                ))}
              </ul>
            )}
          </div>
          <div className="Cart__cartTotal">
            <div>Cart Total</div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
