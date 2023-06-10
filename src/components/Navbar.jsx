import {AiOutlineShoppingCart} from "react-icons/ai"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between py-2 px-2 m-w-[800px]">
      <NavLink to="/"> <img src="https://res.cloudinary.com/codehelp/image/upload/v1667493133/codehelpFinalAssets/ort4cxqmugzj9an4sbae.png"  alt="logo" width="40px"/></NavLink>
        <div className="flex items-center">
         <NavLink to="/" className="mr-2"> <p>Home</p></NavLink>
          <NavLink to="/cart" ><AiOutlineShoppingCart /></NavLink>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
