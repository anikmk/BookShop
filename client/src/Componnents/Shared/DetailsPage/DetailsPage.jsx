import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { getSingleProduct } from "../../../Api/sellerApi";
import Loader from "../Loader/Loader";
import useAuth from "../../../hooks/useAuth";
import { addToCartData } from "../../../Api/cart";
import toast from 'react-hot-toast'
import { addToWishListData } from "../../../Api/wishList";
const DetailsPage = () => {
  const {user} = useAuth();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const { data: product, isLoading,refetch } = useQuery({
    queryKey: [id, "product"],
    queryFn: async () => await getSingleProduct(id),
  });

 
    const handleAddToCart = async() => {
      const cartData = {
        email:user?.email,
        bookName: product?.bookName,
        img: product?.img,
        category: product?.category,
        price: product?.price,
        brand:product?.brand,
        stock: product?.stock,
        description:product?.description
      }
      
      const result = await addToCartData(cartData)
      if(result?.insertedId){
        toast.success("Book add to the cart")
        refetch();
      }

    }
    const handleWishList = async() => {
      const cartData = {
        email:user?.email,
        bookName: product?.bookName,
        img: product?.img,
        category: product?.category,
        price: product?.price,
        brand:product?.brand,
        stock: product?.stock,
        description:product?.description
      }
      
      const result = await addToWishListData(cartData)
      if(result?.insertedId){
        toast.success("Your book save to the wishlist")
        refetch();
      }

    }

    if (isLoading) return <Loader />;

    if (!product) {
      return <div className="text-center text-gray-500">Product not found.</div>;
    }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.img}
            alt={product.bookName}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.bookName}</h1>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Price:</span> ৳{product.price}
          </p>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Stock:</span> {product.stock} available
          </p>
          <p className="text-gray-700 text-base">{product.description}</p>

          {/* Actions */}
          <div className="mt-6 flex gap-4">
            <button onClick={handleAddToCart} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button onClick={handleWishList} className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-md hover:bg-gray-200 transition">
              Wishlist
            </button>
            <Link to={'/productPage'}><button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition">
              Back to Products
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
