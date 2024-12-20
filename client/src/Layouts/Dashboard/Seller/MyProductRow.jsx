import { useQuery } from "@tanstack/react-query";
import { deleteProduct, getProductByEmail } from "../../../Api/sellerApi";
import Loader from "../../../Componnents/Shared/Loader/Loader";
import {Link} from 'react-router-dom'
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
const MyProductRow = () => {
    const {user} = useAuth();
    const {data:allProduct,isLoading,refetch} = useQuery({
        queryKey:[user?.email,"allProduct"],
        queryFn:async()=>await getProductByEmail(user?.email),
    })

    const handleDelete = async(id) =>{
        console.log(id);
        const removeProduct = await deleteProduct(id);
        if(removeProduct?.deletedCount === 1){
            toast.success("Succesfully Deleted")
            refetch();
        }
    }
    if(isLoading) return <Loader />
    console.log(allProduct);

    return <>
          {
  allProduct.map((product, index) => (
    <tr key={product?._id || index} className="bg-base-200">
      <th>{index + 1}</th>
      <td>{product?.bookName}</td>
      <td>{product?.price}</td>
      <td>{product?.category}</td>
      <td>{product?.brand}</td>
      <td><button className="btn"><Link to={`/dashboard/editPage/?id=${product?._id}`}>Edit</Link></button></td>
      <td>
        <button onClick={() => handleDelete(product?._id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  ))
}
    </>
}
export default MyProductRow