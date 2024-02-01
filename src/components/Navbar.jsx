import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const  {cartData}  = useSelector((state) => state.cart);
  return (
    <div className="bg-slate-900">
      <div className="flex flex-row justify-between py-2 px-2 max-w-6xl mx-auto">
      <NavLink to="/"> <img src="" className="h-14 w-14"  alt="logo" width="40px"/></NavLink>
        <div className="flex items-center">
         <NavLink to="/" className="mr-2 text-white"> <p>Home</p></NavLink>
          <NavLink className="text-white" to="/cart" ><AiOutlineShoppingCart /></NavLink><sup className="text-white">{cartData.length}</sup>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
