import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ user, redirectTO, children }) => {
    if (user == null) return <Navigate replace to={redirectTO} />;
    return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    redirectTO: PropTypes.string,
    children: PropTypes.node,
};
