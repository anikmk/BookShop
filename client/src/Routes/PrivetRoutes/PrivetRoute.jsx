
import  { useLocation,Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types';
import Loader from "../../Componnents/Shared/Loader/Loader";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }} replace />;
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivetRoute;
