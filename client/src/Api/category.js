import axiosSecure from "./axiosSecure"

export const getCategoryWiseData = async(category) => {
   try{
    const {data} = await axiosSecure.get(`/productCategory/${category}`);
    return data;
   }
   catch(err){console.log(err);}
}