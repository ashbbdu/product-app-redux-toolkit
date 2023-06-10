import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, currentValue) => acc + currentValue.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? 
       <div>
        {
          cart.map((item , index) => {
            return <CartItem item={item} key={index} />
          })
        }
        </div>
       : (
        <div>
          <h1>Your Cart is Empty</h1>
          <Link to="/">
            <button>Show Now</button>
          </Link>
        </div>
      )}
      <div>
        <div>
          <p>Your Cart</p>
          <p>Summary</p>
          <p>Total Items : {cart.length}</p>
          <p>Total Amount : {totalAmount} </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
