import axiosSecure from "./axiosSecure"

export const addSellerProduct = async(addProductData) => {
    try{
        const {data} = await axiosSecure.post('/addSellerProduct',addProductData);
        return data
    }
    catch(err){console.log(err);}
}

// export const getAllProduct = async() => {
//     try{
//         const {data} = await axiosSecure.get('/getAllProduct');
//         return data;
//     }
//     catch(err){console.log(err);}
// }
export const getProductByEmail = async(email) => {
    try{
        const {data} = await axiosSecure.get(`/getProductByEmail/${email}`)
        return data;
    }
    catch(err){console.log(err);}
}

export const getSingleProduct = async(id)=>{
    try{
        const {data} = await axiosSecure.get(`/getSingleProduct/${id}`);
        return data;
    }
    catch(error){console.log(error);}
}
export const updateProducts = async(id,updateProductData) => {
    try{
        const {data} = axiosSecure.put(`/updateProducts/${id}`,updateProductData);
        console.log(data);
        return data;
    }
    catch(err){console.log(err);}
}
export const deleteProduct = async(id)=>{
    try{
        const {data} = await axiosSecure.delete(`/deleteProduct/${id}`);
        return data
    }
    catch(err){console.log(err);}
}