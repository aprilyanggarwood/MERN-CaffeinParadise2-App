import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Nav/Navbar";
import Contact from "./Contact";
import CoffeeDrinkImg from "./CoffeeDrinkImg";
import { Container, Row, Col } from "react-bootstrap";
import OrderModal from "./OrderModal";
// import { useStoreContext, StoreContext } from "../components/utils/GlobalState";
import { useStoreContext } from "../components/utils/GlobalState";
import {
  ADD_ORDER,
  REMOVE_ORDER,
  SAVE_ORDER,
} from "../components/utils/action/actionTypes";
// import Menu from "./Menu";
import "./style.css";
import Categories from "./Categories";
import items from "./MenuData";
import Rating from "../components/Rating";
import CartContext from "../contexts/Cart/CartContext";
import Cart from "../components/Cart";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [category, setCategory] = useState("all");
  const [quantities, setQuantities] = useState({});

  const [state, dispatch] = useStoreContext();
  const { addToCart } = useContext(CartContext);
  // const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    console.log(state.orders);
  }, [state]);
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

  const handleOrder = (item, { target }) => {
    const quantity = target.previousSibling.previousSibling.value;
    const size = target.previousSibling.value;
    console.log(item);
    dispatch({ type: ADD_ORDER, payload: { ...item, quantity, size } });
    console.log(quantities);
  };

  const priceMap = {
    small: "price_sm",
    medium: "price_md",
    large: "price_lg",
  };

  return (
    <>
      <Container>
        <main>
          <Navbar>{Contact}</Navbar>
          <Cart />
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
              {menuItems.map((menuItem, i) => {
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
                  //       <ListGroup horizontal>
                  //   <ListGroup.Item><img
                  //                               src={CoffeeDrinkImg[img_url]}
                  //                               className="card-img-top img-size target"
                  //                               alt="name"
                  //                             /></ListGroup.Item>
                  //   <ListGroup.Item><h4 className="card-title">{name}</h4></ListGroup.Item>
                  //   <ListGroup.Item>{`${size} x ${quantity} = $${
                  //                               menuItem[priceMap[size]] * Number(quantity)
                  //                             }`}</ListGroup.Item>
                  //   <ListGroup.Item><button className="btn btn-danger">Remove</button></ListGroup.Item>
                  // </ListGroup>

                  <div className="col" key={i}>
                    <div className="card h-100">
                      <img
                        src={CoffeeDrinkImg[img_url]}
                        className="card-img-top img-size target"
                        alt="name"
                      />

                      <div className="card-body card-hight">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{short_description}</p>
                      </div>

                      <div className="card-footer">
                        <select
                          onChange={({ target }) => {
                            console.log(target.value);
                            setQuantities({
                              ...quantities,
                              [`drink-${i}`]: target.value,
                            });
                          }}
                          className="quantity form-select form-select-sm target"
                          aria-label=".form-select-sm example"
                          defaultValue="1"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        <select
                          className="price form-select form-select-sm target"
                          aria-label=".form-select-sm example"
                          defaultValue="small"
                        >
                          <option value="small">small - ${price_sm}</option>
                          <option value="medium">medium - ${price_md}</option>
                          <option value="large">large - ${price_lg}</option>
                        </select>
                        <div style={{ margin: " 20px 0 " }}>
                          <Rating
                            value={items.rating}
                            text={`${items.numReviews} reviews`}
                          />
                        </div>
                        {/* <button
                          className="order-btn"
                          onClick={(e) => handleOrder(menuItem, e)}
                        >
                          Order
                        </button> */}
                        <button
                          className="ProductCard__button"
                          onClick={() => addToCart(menuItem)}
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
        </main>
      </Container>
    </>
  );
};

export default Menu;
