import { useStoreContext } from "../components/utils/GlobalSteate";
import { useEffect } from "react";

const OrdersPage = () => {
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    console.log("orders", state.orders);
  }, [state]);

  return <h1>order</h1>;
};

export default OrdersPage;
