import axiosSecure from "./axiosSecure";

export const getProductFilterData = async (category, searchText, sorting,brand) => {
    try {
        const { data } = await axiosSecure.get(`/product/search?category=${category}&searchText=${searchText}&sorting=${sorting}&brand=${brand}`);
        return data;
    } catch (error) {
        console.error('Error fetching product filter data:', error);
        throw error;
    }
};
