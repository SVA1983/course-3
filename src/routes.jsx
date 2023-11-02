import { Route, Routes } from "react-router-dom";
import Main from "./MainPage";
import AutorizationUser from "./pages/autorization/autorization";
import RegistrationUser from "./pages/registration/registranion";
import FavoritesUser from "./pages/favorites/favorites";
import Category from "./pages/category/category";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./pages/protected-route/protected";
export const AppRoutes = ({user}) => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/login" element={<ProtectedRoute isAllowed={Boolean(user)}> <AutorizationUser/></ProtectedRoute>} />
            <Route path="/register" element={<RegistrationUser/>} />
            <Route path="/favorites" element={<FavoritesUser/>} />
            <Route path="/category/:id" element={<Category/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}