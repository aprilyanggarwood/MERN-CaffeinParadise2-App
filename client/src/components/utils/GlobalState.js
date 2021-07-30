import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_ORDER,
  REMOVE_ORDER,
  ADD_ORDER,
  LOADING,
} from "./action/actionTypes";

// export const StoreContext = createContext();
const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: action.order,
        loading: false,
      };

    case ADD_ORDER:
      console.log(action.payload);
      return {
        ...state,
        orders: [action.payload, ...state.orders],
        loading: false,
      };

    case REMOVE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => {
          return order._id !== action._id;
        }),
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    orders: [],
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
