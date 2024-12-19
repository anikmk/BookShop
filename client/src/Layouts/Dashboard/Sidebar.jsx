import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import { getAllUsers, getUserByEmail } from "../../Api/userApi";
import Loader from "../../Componnents/Shared/Loader/Loader";


const Sidebar = () =>{
    const {user} = useAuth();
    const {data:userData,isLoading} = useQuery({
        queryKey:["userData",user?.email],
        queryFn:async()=>await getUserByEmail(user?.email)
    }) 
    // const {data:allUsers} = useQuery({
    //     queryKey:[user,"userData"],
    //     queryFn:async()=>await getAllUsers()
    // })
    console.log(userData);
    if(isLoading){
        return <Loader />
    }
    if(!userData){return <div><p>user not found</p> <Link to={'/'}>Home</Link></div>}
    return <>
   <div className="min-h-screen bg-purple-400 p-4">
   <ul className="space-y-4 text-white text-lg">
        <li><Link to={"/"}>Overview</Link></li>
        {
        userData?.role === "seller" && <>
        <li><Link to={"/dashboard/myProduct"}>My Product</Link></li>
        <li><Link to={"/dashboard/addProduct"}>Add Product</Link></li></>
        }
        {
            userData?.role === "admin" && <>
            <li><Link to={"/dashboard/manageAllUsers"}>All Users</Link></li>
            </>
        }
        <li><Link to={"/"}>Home</Link></li>
        <li><Link>Logout</Link></li>
    </ul>
   </div>
    </>
}
export default Sidebar;