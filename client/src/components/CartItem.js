import { useStoreContext } from "../components/utils/GlobalState";
import { useEffect } from "react";
// import CoffeeDrinkImg from "./CoffeeDrinkImg";
import { Link } from "react-router-dom";
import {
  ADD_ORDER,
  // REMOVE_ORDER,
  // SAVE_ORDER,
} from "../components/utils/action/actionTypes";

const priceMap = {
  small: "price_sm",
  medium: "price_md",
  large: "price_lg",
};
const OrdersPage = () => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    console.log("orders", state.orders);
  }, [state]);

  return (
    <>
      <Link to="/menu" className="navR">
        <span>Back to Menu</span>
      </Link>
      {state.orders.map((menuItem, i) => {
        const { name, img_url, size, quantity } = menuItem;
        return (
          <div className="col" key={i}>
            <ul>
              <li>
                <img
                  src={"CoffeeDrinkImg[img_url]"}
                  className="card-img-top img-size target"
                  alt="name"
                />
              </li>

              <li>
                <h4 className="card-title">{name}</h4>
              </li>
              <li>
                {`${size} x ${quantity} = $${
                  menuItem[priceMap[size]] * Number(quantity)
                }`}
              </li>
            </ul>
            <hr></hr>
          </div>
        );
      })}
      <h4>
        Total - $
        {state.orders.reduce(
          (total, order) =>
            total + order[priceMap[order.size]] * Number(order.quantity),
          0
        )}
      </h4>
    </>
  );
};

export default OrdersPage;
