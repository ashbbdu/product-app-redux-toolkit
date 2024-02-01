import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCard } from "../redux/Slices/cartSlice";
const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();

  const removefromCartHanlder = (item) => {
    dispatch(removeFromCard(item));
    toast.error("Item Removed from Cart !");
  };

  return (
    <div>
      <div className="my-5 boder border-b-4 pb-2 border-black">
        <div>
          <img className="w-[150px]" src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1 className="description">{item.description}</h1>
        </div>
        <div className="flex items-center justify-between mt-6">
          <h1>${item.price}</h1>
          <div onClick={() => removefromCartHanlder(item)} className="bg-red-400 p-2 rounded-3xl cursor-pointer">
            {" "}
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
