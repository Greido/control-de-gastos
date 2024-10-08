import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "../hooks/ProtectedRoutes";
import { UserAuth } from "../context/AuthContext";

export function MyRoutes() {
    const { user } = UserAuth();
    console.log(user); // Verificar el valor de `user`

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    element={<ProtectedRoute user={user} redirectTo="/login" />}
                >
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
