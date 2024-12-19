
import  { useLocation,Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { getUserByEmail } from "../../Api/userApi";
import Loader from "../../Componnents/Shared/Loader/Loader";

const SellerRoute = ({children}) => {

    const { user, loading } = useAuth();
    const location = useLocation();
    const {data:userData,isLoading} = useQuery({
      queryKey:["userData",user?.email],
      queryFn:async()=>await getUserByEmail(user?.email)
  }) 
    if (loading || isLoading) {
      return <Loader />;
    }
    if (user && userData?.role === "seller") {
      return children;
    }
    return <Navigate to={"/"} state={{ from: location }} replace />;
}
SellerRoute.propTypes = {
    children: PropTypes.node,
}
export default SellerRoute;