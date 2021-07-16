import axios from "axios";

const API = {
  getOrders: function () {
    return axios.get("/api/yourorders");
  },

  getOrder: function (id) {
    return axios.get("/api/yourorders/" + id);
  },
};
export default API;
