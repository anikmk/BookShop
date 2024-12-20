import toast from "react-hot-toast";
import { addSellerProduct } from "../../../Api/sellerApi";
import useAuth from "../../../hooks/useAuth";


const AddProduct = () => {
    const {user} = useAuth();
    const handleAddProductSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const bookName = form.bookname.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const stock = form.stock.value;
        const category = form.category.value;
        const description = form.description.value;
        const addProductData = {
            bookName,
            brand,
            price:parseFloat(price),
            stock:parseFloat(stock),
            category,
            sellerEmail:user?.email,
            description
        }
        try{
            const result = await addSellerProduct(addProductData);
            if(result?.insertedId){
                toast.success("Succesfully added your book!")
            }
            else{toast.error("Something went wrong try again!")}
        }
        catch(err){console.log(err);}
    }
    return <>
    <div className="bg-white md:p-8 p-4 my-14 rounded shadow-xl relative w-[90%] md:w-9/12 mx-auto">
        <div className='absolute top-0 left-0 bg-primary w-8 h-[4px]'></div>
        <div className='absolute top-0 left-0 bg-primary w-2 h-[24px]'></div>
        <div className='right-0 bottom-0 bg-primary absolute w-8 h-[4px]'></div>
        <div className='right-0 bottom-0 bg-primary absolute w-2 h-[24px]'></div>
      <form onSubmit={handleAddProductSubmit}>
          <div className="mb-5">
              <div className='space-y-3'>
              <p className="text-center text-4xl">Add Product</p>
              <div className='flex items-center  gap-5'>
              <div className='w-full'>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Book name</h3>
              <input name="bookname" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='Enter your title' required/>
              </div>

              <div className='w-full'>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Brand</h3>
              <input name="brand" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='brand..' required/>
              </div>
              </div>
              <div className='flex items-center  gap-5'>
              <div className='w-full'>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Price</h3>
              <input name="price" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='Enter your price' required/>
              </div>

              <div className='w-full'>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Stock</h3>
              <input name="stock" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="number" placeholder='stock..' required/>
              </div>
              <div className='w-full'>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Category</h3>
              <input name="category" className="border-slate-300 border focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px] w-full" type="text" placeholder='category..' required/>
              </div>
              </div>
              <div>
                <h3 className="mb-2 font-poppins text-[#000000f3]">Description</h3>
              <textarea name="description" className="border-slate-300 border w-full focus:outline-none bg-transparent px-4 py-2 rounded-lg text-[16px]" type="text" placeholder='Other info ..'/>
              </div>
            </div>
          </div>         
            <button className="btn btn-primary w-full">Add Product</button>
      </form>
    </div>
    </>
}
export default AddProduct;