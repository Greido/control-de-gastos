import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "../hooks/ProtectedRoutes";
import { UserAuth } from "../context/AuthContext";
export function MyRoutes() {
    const { user } = UserAuth();
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
}
