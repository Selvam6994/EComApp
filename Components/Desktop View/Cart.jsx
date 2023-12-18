import { Button, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { addCartContext } from "./DesktopApp";

const Cart = () => {
  const [cartItem] = useContext(addCartContext);
  const cartItems = cartItem;
  const totalPrice = () => {
    let total = 0;
    const price = cartItem.map((item) => (total = +item.price + total));
    return price[price.length - 1];
  };
  console.log(totalPrice());
  return (
    <div className="cartPage">
      {cartItems.length == 0 ? (
        <div className="emptyCart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="cartItemsDiv">
            {cartItems.map((items) => (
              <Paper className="cartItemCard" elevation={4}>
                <img src={items.image} alt={items.name} />
                <div className="itemDescription">
                  <span>{items.name}</span>
                  <span>Qty:{`${items.quantity}${items.unit}`}</span>
                  <Button size="small">View Product</Button>
                </div>
                <div>
                  <span>
                    <CurrencyRupeeIcon />
                    {items.price}/-
                  </span>
                  <Button size="small">Buy now</Button>
                </div>
              </Paper>
            ))}
          </div>
        </>
      )}
      <Paper className="itemPrice">
        <b>Total Price:</b>
        <span>
          <CurrencyRupeeIcon />
          {totalPrice()}/-
        </span>
      </Paper>
    </div>
  );
};

export default Cart;
