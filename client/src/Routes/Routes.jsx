import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ProductPage from "../Pages/ProductPage/ProductPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivetRoute from "./PrivetRoutes/PrivetRoute";
import SellerRoute from "./PrivetRoutes/SellerRoute";
import AddProduct from "../Layouts/Dashboard/Seller/AddProduct";
import MyProduct from "../Layouts/Dashboard/Seller/MyProduct";
import AdminRoute from "./PrivetRoutes/AdminRoute";
import ManageAllUsers from "../Layouts/Dashboard/Admin/ManageAllUsers";
import EditPage from "../Layouts/Dashboard/Seller/EditPage";
import DetailsPage from "../Componnents/Shared/DetailsPage/DetailsPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/productPage',
                element:<ProductPage />
            },
            {
                path:'/detailsPage',
                element:<DetailsPage />
            },
            {
                path:'/aboutPage',
                element:<AboutPage />
            },
            {
                path:'/contactPage',
                element:<ContactPage />
            },
            {
                path:'/signIn',
                element:<SignIn />
            },
            {
                path:'signUp',
                element:<SignUp />
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivetRoute><DashboardLayout /></PrivetRoute>,
        children:[
            {
                path:'addProduct',
                element:<SellerRoute><AddProduct /></SellerRoute>
            },
            {
                path:'myProduct',
                element:<SellerRoute><MyProduct /></SellerRoute>
            },
            {
                path:'editPage',
                element:<EditPage />
            },
            {
                path:'manageAllUsers',
                element:<AdminRoute> <ManageAllUsers /> </AdminRoute>
            }
        ]
    }
])