import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCard } from "../redux/Slices/cartSlice";

const Product = ({ data }) => {
  const { cart } = useSelector((state) => state);
  const dispatch =  useDispatch()

  const addToCartHandler = () => {
    dispatch(addToCart(data))
    toast.success("Item Added to the Cart !")
  }

  const removeFromCartHandler = () => {
  dispatch(removeFromCard(data.id))
  toast.error("Item Removed from Cart !")
  }

  

  return (
    <div>
      <div>
        <p>{data.title}</p>
      </div>
      <div>
        <p>{data.description}</p>
      </div>
      <div>
        <img src={data.image} alt="product" />
      </div>
      <div>
        <p>{data.price}</p>
      </div>
      <div>
        {/* cart k andear ek id jo data ki id k barbar hua to wo item already selected hoga , in that case show remove from cart else shoe add to cart */}
        {cart.some((p) => p.id == data.id) ? (
          <button  onClick={removeFromCartHandler}>Remove From Cart</button>
        ) : (
          <button  onClick={addToCartHandler}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
