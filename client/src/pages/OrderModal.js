import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useContext } from "react";

import CartContext from "../contexts/Cart/CartContext";

import CartItem from "../components/CartItem";

const OrderModal = ({ open, close }) => {
  const { cartItems } = useContext(CartContext);
  const handleOrder = () => {
    //do order stuff
  };
  return (
    <>
      <Modal show={open} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Your orders here! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div style={{ textAlign: "right" }}>
              <i
                style={{ cursor: "pointer" }}
                className="fa fa-times-circle"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              {cartItems.length === 0 ? (
                <h4>Cart is Empty</h4>
              ) : (
                <ul>
                  {cartItems.map((item) => (
                    <CartItem key={item._id} item={item} />
                  ))}
                </ul>
              )}
            </div>
            <div>
              <div>
                Cart Total:
                {/* {item.`${size} x ${quantity} = $${
                item[priceMap[size]] * Number(quantity)
              }`} */}
              </div>
              <div></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleOrder}>
            Confirm your order
          </Button>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderModal;
