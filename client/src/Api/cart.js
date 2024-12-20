import axiosSecure from "./axiosSecure"

export const addToCartData = async(cartData) => {
    try{
        const {data} = await axiosSecure.post('/addToCartData',cartData);
        return data
    }
    catch(err){console.log(err);}

}

export const getCartDataByEmail = async(email) => {
    try{
        const {data} = await axiosSecure.get(`/getCartDataByEmail/${email}`);
        return data;
    }
    catch(err){console.log(err);}
}