import useAuth from "../../../hooks/useAuth";
import DropDownMenu from "./DropDownMenu";
import NavLogo from "./NavLogo";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useQuery } from "@tanstack/react-query";
import { getUserByEmail } from "../../../Api/userApi";
import Loader from "../Loader/Loader";
const Navbar = () => {
  const {user} = useAuth();
  const {data:userData,isLoading} = useQuery({
    queryKey:[user?.email,"userData"],
    queryFn:async()=>await getUserByEmail(user?.email)
  })
  if(isLoading) return <Loader />
    return (
        <>
        <div className="navbar bg-base-200 px-2 md:px-14">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <Link to={"/"}><li><a>Home</a></li></Link>
        <Link to={"/productPage"}><li><a>Product</a></li></Link>
        <Link to={"/aboutPage"}><li><a>About</a></li></Link>
        <Link to={"/contactPage"}><li><a>Contact us</a></li></Link>
      </ul>
    </div>
    <NavLogo text1={"OOK"} text2={"SHOP"}/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-md font-poppins uppercase">
      <Link to={"/"}><li><a>Home</a></li></Link>
      <Link to={"/productPage"}><li><a>Product</a></li></Link>
      <Link to={"/aboutPage"}><li><a>About</a></li></Link>
      <Link to={"contactPage"}><li><a>Contact us</a></li></Link>
    </ul>
  </div>
  <div className="navbar-end">
      {
        userData?.role === 'buyer' && 
        <>
         <div className="mr-10 text-3xl"><TiShoppingCart /></div>
        <div className="mr-10 text-lg">Wishlist</div>
        </>
      }

    {
      user? <DropDownMenu /> : <Link to={"/signIn"}><button>Log In</button></Link>
    }
    
  </div>
    </div>
        </>
    );
};

export default Navbar;