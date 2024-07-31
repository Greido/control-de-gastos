import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ user, redirectTO, children }) => {
    // Component logic here
    if (user == null) return <Navigate to={redirectTO} />;
    return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    redirectTO: PropTypes.string,
    children: PropTypes.node,
};
