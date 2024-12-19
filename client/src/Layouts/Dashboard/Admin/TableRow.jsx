import { useQuery } from "@tanstack/react-query";
import {  deleteUser, getAllUsers, updateUserRole } from "../../../Api/userApi";
import Loader from "../../../Componnents/Shared/Loader/Loader";
import toast from "react-hot-toast";

const TableRow = () => {
    const {data:allUsers,isLoading,refetch} = useQuery({
        queryKey:"allUsers",
        queryFn:async()=>await getAllUsers(),
    })



    const handleDelete = async(id) =>{
        const removeUser = await deleteUser(id);
        if(removeUser?.deletedCount === 1){
            toast.success("Succesfully Deleted")
            refetch();
        }
    }
    const handleUserUpdate = async(role) => {
        console.log(role);
      const updateUser = await updateUserRole(role);
      if(updateUser?.modifiedCount === 1){
        toast.success(`User role updated`)
        refetch();
      }

    }
    if(isLoading) return <Loader />
    console.log(allUsers);
    return <>
    
    {
  allUsers.map((user, index) => (
    <tr key={user?._id || index} className="bg-base-200">
      <th>{index + 1}</th>
      <td>{user?.displayName || "Guest"}</td>
      <td>{user?.email}</td>
      <td className={`${user?.role === 'seller' && "font-semibold"} ${user?.role === 'admin' && "font-bold"}`}>{user?.role}</td>

      <td className={`cursor-pointer`} onClick={()=>handleUserUpdate(user?.role)}>{user?.role === "seller" ? "Make admin":"Make Seller"}</td>
      <td>
        <button onClick={() => handleDelete(user?._id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  ))
}


    </>
}
export default TableRow;