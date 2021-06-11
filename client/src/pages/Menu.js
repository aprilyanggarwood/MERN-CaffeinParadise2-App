import React, { useState } from "react";
// import CoffeeDrinkImg from "../components/CoffeeDrinkImg";
// import Menu from "./Menu";
import Categories from "./Categories";
import items from "./MemuData";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [category, setCategory] = useState("all");

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

  return (
    <main>
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
                    src={img_url}
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
                    <button className="order-btn">Order</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Menu;
