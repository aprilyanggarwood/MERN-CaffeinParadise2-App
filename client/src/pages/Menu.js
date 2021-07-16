import React, { useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Contact from "./Contact";
import CoffeeDrinkImg from "./CoffeeDrinkImg";
import { useStoreContext } from "../components/utils/GlobalSteate";
import {
  ADD_ORDER,
  REMOVE_ORDER,
  SAVE_ORDER,
} from "../components/utils/action/actionTypes";
// import Menu from "./Menu";
import "./style.css";
import Categories from "./Categories";
import items from "./MenuData";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [category, setCategory] = useState("all");
  const [state, dispatch] = useStoreContext();

  const filterItems = (category) => {
    console.log("filtering by --- ", category);
    setCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const filterSubCategory = (category) => {
    const filtered = items.filter(
      ({ sub_category }) => sub_category === category
    );
    setMenuItems(filtered);
  };

  const handleOrder = (item) => {
    dispatch({ type: ADD_ORDER, order: item });
  };

  return (
    <main>
      <Navbar>{Contact}</Navbar>

      <section className="menu section">
        <div className="name">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        {/* <Menu items={menuItems} /> */}

        {category === "Coffee Drinks" && (
          <>
            <button
              onClick={() => filterSubCategory("hot coffee drink")}
              className="hot-drink-btn"
            >
              Hot Drink
            </button>
            <button
              onClick={() => filterSubCategory("cold coffee drink")}
              className="cold-drink-btn"
            >
              Cold Drink
            </button>
          </>
        )}
        <div
          // key={id}
          className="row row-cols-1 row-cols-md-4 g-2"
          style={{ margin: "15px" }}
        >
          {menuItems.map((menuItem) => {
            const {
              id,
              name,
              price_sm,
              price_md,
              price_lg,
              img_url,
              short_description,
            } = menuItem;
            return (
              <div className="col">
                <div className="card h-100">
                  <img
                    src={CoffeeDrinkImg[img_url]}
                    className="card-img-top img-size"
                    alt="name"
                  />

                  <div className="card-body card-hight">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{short_description}</p>
                  </div>

                  <div className="card-footer">
                    <select
                      className="quantity form-select form-select-sm target"
                      aria-label=".form-select-sm example"
                    >
                      <option value="1" selected>
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    <select
                      className="price form-select form-select-sm target"
                      aria-label=".form-select-sm example"
                    >
                      <option value="small-{price_sm}" selected>
                        small - ${price_sm}
                      </option>
                      <option value="medium-{price_md}">
                        medium - ${price_md}
                      </option>
                      <option value="large-{price_lg}">
                        large - ${price_lg}
                      </option>
                    </select>
                    <button
                      className="order-btn"
                      onClick={() => handleOrder(menuItem)}
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </div>
    </main>
  );
};

export default Menu;
