import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/Cart/CartContext";
import { useContext } from "react";
import OrderModal from "../../pages/OrderModal";
function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  return (
    <>
      <OrderModal open={modalOpen} close={close} />
      <div id="navbarHP" name="pill-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-gray">
          <h2 className="titleHeading"> Caffeine Paradise</h2>

          <nav className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/yourorder" className="navR">
                  <span>Your Order</span>
                </Link>
              </li>

              <li>
                <div className="cart__icon btn-light btn">
                  <i
                    className="fa fa-shopping-cart"
                    aria-hidden="true"
                    onClick={() => setModalOpen(!modalOpen)}
                  />
                  {cartItems.length > 0 && (
                    <div className="item__count">
                      <span>{cartItems.length}</span>
                    </div>
                  )}
                </div>
              </li>

              <li className="nav-item active">
                <a href="/contact" className="navR">
                  <span>Contact</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/signup.html" className="navR">
                  <i className="fas fa-sign-out-alt"></i> log out
                </a>
              </li>
            </ul>
          </nav>
        </nav>
      </div>

      <br></br>
    </>
  );
}

export default Navbar;
