
import { toast } from "react-hot-toast";
import {AiOutlineDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { removeFromCard } from "../redux/Slices/cartSlice";
const CartItem = ({item , index}) => {

  const dispatch = useDispatch()

  const removefromCartHanlder = (id) => {
    dispatch(removeFromCard(id))
    toast.error("Item Removed from Cart !")
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <h1>{item.price}</h1>
          <div  onClick={() => removefromCartHanlder(item.id)}>  <AiOutlineDelete /></div>
        
        </div>
      </div>
    </div>
  )
};

export default CartItem;
