import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCard } from "../redux/Slices/cartSlice";

const Product = ({ data }) => {
  const { cartData } = useSelector((state) => state.cart);
  const dispatch =  useDispatch()

  const addToCartHandler = () => {
    dispatch(addToCart(data))
    toast.success("Item Added to the Cart !")
  }

  const removeFromCartHandler = () => {
  dispatch(removeFromCard(data))
  toast.error("Item Removed from Cart !")
  }

  

  return (
    <div className="flex flex-col hover:scale-110 justify-between rounded-md transition duration-300 ease-in max-h-[700px] border border-1 p-6 card ">
      <div >
        <p>{data.title}</p>
      </div>
      <div>
        <p>{data.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={data.image} alt="product" className="max-w-full h-full mx-auto" />
      </div>
      <div className="flex items-center justify-between">
      <div>
        <p>${data.price}</p>
      </div>
      <div>
        {/* cart k andear ek id jo data ki id k barbar hua to wo item already selected hoga , in that case show remove from cart else shoe add to cart */}
        {cartData.some((p) => p.id == data.id) ? ( 
         <button  onClick={removeFromCartHandler}>Remove From Cart</button>
        ) : (
          <button  onClick={addToCartHandler}>Add To Cart</button>
        )}
      </div>
      </div>
    </div>
  );
};

export default Product;
