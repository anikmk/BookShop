import axiosSecure from "./axiosSecure"

export const postUserData = async(userData) => {
    try{
        const {data} = await axiosSecure.post('/users',userData);
        return data;
    }
    catch(err){
        console.log(err);
    }
}

// get single user by email:
export const getUserByEmail = async(email) => {
    try{
        const {data} = await axiosSecure.get(`/logedInUser/${email}`);
        return data
    }
    catch(err){
        console.log(err);
    }
}

// get all users
export const getAllUsers = async() => {
    try{
        const {data} = await axiosSecure.get('/allUsers');
        return data;
    }
    catch(err){
        console.log(err);
    }
}

// delete user
export const deleteUser = async(id) => {
    try{
        const {data} = await axiosSecure.delete(`/deleteUser/${id}`);
        return data;
    }
    catch(err){
        console.log(err);
    }
}
export const updateUserRole = async(role) => {
    try{
        const {data} = await axiosSecure.put(`/updateUser/${role}`);
        return data;
    }
    catch(err){console.log(err);}
}
export const getToken = async(email) => {
    try{
        const {data} = await axiosSecure.post('/jsonwebtoken',{email});
        return data;
    }
    catch(err){
        console.log(err)
    }
}