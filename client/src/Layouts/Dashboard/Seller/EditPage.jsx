import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct, updateProducts } from "../../../Api/sellerApi";
import Loader from "../../../Componnents/Shared/Loader/Loader";
import toast from "react-hot-toast";

const EditPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    console.log(id);
    const {data:editData,isLoading,refetch} = useQuery({
        queryKey:[id,"editData"],
        queryFn:async()=>await getSingleProduct(id)
    })
    const handleAddProductSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const bookName = form.bookname.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const stock = form.stock.value;
        const category = form.category.value;
        const description = form.description.value;
        const updateProductData = {
            bookName,
            brand,
            price:parseFloat(price),
            stock:parseFloat(stock),
            category,
            description
        }
                await updateProducts(id,updateProductData)
                toast.success("Product updated Succesfully!");
                refetch();
        
    }
    if(isLoading) return <Loader />
    if(!editData) return <div>No data found: Please reload this page</div>
    return <>
    <div className="bg-white md:p-8 p-4 my-14 rounded shadow-xl relative w-[90%] md:w-9/12 mx-auto">
        <div className='absolute top-0 left-0 bg-primary w-8 h-[4px]'></div>
        <div className='absolute top-0 left-0 bg-primary w-2 h-[24px]'></div>
        <div className='right-0 bottom-0 bg-primary absolute w-8 h-[4px]'></div>
        <div className='right-0 bottom-0 bg-primary absolute w-2 h-[24px]'></div>
      <form onSubmit={handleAddProductSubmit}>
          <div className="mb-5">
              <div className='space-y-3'>
              <p className="text-center text-4xl">Update Product</p>
              <div className='flex items-center  gap-5'>
              <div className='w-full'>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Book name</h3>
              <input name="bookname" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" defaultValue={editData?.bookName} required/>
              </div>

              <div className='w-full'>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Brand</h3>
              <input name="brand" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" defaultValue={editData?.brand} required/>
              </div>
              </div>
              <div className='flex items-center  gap-5'>
              <div className='w-full'>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Price</h3>
              <input name="price" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" defaultValue={editData?.price} required/>
              </div>

              <div className='w-full'>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Stock</h3>
              <input name="stock" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" defaultValue={editData?.stock} required/>
              </div>
              <div className='w-full'>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Category</h3>
              <input name="category" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" defaultValue={editData?.category} required/>
              </div>
              </div>
              <div>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Description</h3>
              <textarea name="description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px]" type="text" defaultValue={editData?.description}/>
              </div>
            </div>
          </div>         
            <button className="btn btn-primary w-full">Update</button>
      </form>
    </div>
    </>
}
export default EditPage;