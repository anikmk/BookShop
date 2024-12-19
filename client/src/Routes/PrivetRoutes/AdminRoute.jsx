
import  { useLocation,Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { getUserByEmail } from "../../Api/userApi";
import PropTypes from 'prop-types';
import Loader from "../../Componnents/Shared/Loader/Loader";
const AdminRoute = ({children}) => {

    const { user, loading } = useAuth();
    const location = useLocation();
    const {data:userData,isLoading} = useQuery({
      queryKey:["userData",user?.email],
      queryFn:async()=>await getUserByEmail(user?.email)
  }) 
    if (loading || isLoading) {
      return <Loader />;
    }
    if (user && userData?.role === "admin") {
      return children;
    }
    return <Navigate to={"/"} state={{ from: location }} replace />;
}
AdminRoute.propTypes = {
    children: PropTypes.node,
}
export default AdminRoute;