const axios = require("axios");
export const login = (credentials) => axios.post("/login", credentials);
export const order = ()

case NEW_ORDER:
      const orders = [...state.orders, action.order];
      return {
        ...state,
        orders: orders,
      };