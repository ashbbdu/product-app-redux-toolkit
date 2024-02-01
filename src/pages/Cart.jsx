import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const {cartData} = useSelector((state) => state.cart);
  useEffect(() => {
    setTotalAmount(cartData.reduce((acc, currentValue) => acc + currentValue.price, 0));
  }, [cartData]);

  return (
    <div className="flex flex-row justify-between py-2 px-2 max-w-6xl mx-auto  items-start">
      {6 > 0 ? 
       <div className="flex-1">
        {
          cartData.map((item , index) => {
            return <CartItem item={item} key={index} />
          })
        }
        </div>
       : (
        <div className="flex flex-col w-full items-center justify-center mt-20">
          <h1>Your Cart is Empty</h1>
          <Link to="/">
            <button>Show Now</button>
          </Link>
        </div>
      )}
      <div className="flex-1 mt-20 ml-20">
        {
          // cart.length > 0 && 
            <div>
          <p>Your Cart</p>
          <p>Summary</p>
          <p>Total Items : {cartData.length}</p>
          <p>Total Amount : {totalAmount} </p>
        </div>
        }
      
      </div>
    </div>
  );
};

export default Cart;
