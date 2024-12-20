import { useQuery } from "@tanstack/react-query";
import { getCartDataByEmail } from "../../../../Api/cart";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../Loader/Loader";
import NavLogo from "../NavLogo";

const Cart = () => {
    const {user} = useAuth();

      const {data: data, isLoading,refetch} = useQuery({
        queryKey:[user?.email,"cartData"],
        queryFn:async()=> await getCartDataByEmail(user?.email)
      })
      refetch()
      if(isLoading) return <Loader />
      console.log(data);
    return <div>
         <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-center"><span className="text-lg font-medium ">Wellcome to</span><NavLogo text1={'Book'} text2={'Shop'}/> </h2>
          <div className="divider"></div>
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {data?.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty!</p>
      ) : (
        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white"
            >
              {/* Book Image */}
              <img
                src={item.img}
                alt={item.bookName}
                className="w-20 h-20 rounded-lg object-cover"
              />

              {/* Book Details */}
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.bookName}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>

              {/* Book Price and Action */}
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-800">
                  {item.price.toFixed(2)} Taka
                </p>
                <button className="mt-2 text-red-600 hover:underline">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
}
 
export default Cart;