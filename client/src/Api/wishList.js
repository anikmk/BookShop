import axiosSecure from "./axiosSecure"

export const addToWishListData = async(wishListData) => {
    try{
        const {data} = await axiosSecure.post('/addToWishListData',wishListData);
        return data
    }
    catch(err){console.log(err);}

}

export const getWishListDataByEmail = async(email) => {
    try{
        const {data} = await axiosSecure.get(`/getWishDataByEmail/${email}`);
        return data;
    }
    catch(err){console.log(err);}
}