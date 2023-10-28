import { Route, Routes } from "react-router-dom";
import Main from "./MainPage";
import AutorizationUser from "./pages/autorization/autorization";
import RegistrationUser from "./pages/registration/registranion";
import FavoritesUser from "./pages/favorites/favorites";
import { NotFound } from "./pages/not-found";
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/login" element={<AutorizationUser/>} />
            <Route path="/register" element={<RegistrationUser/>} />
            <Route path="/favorites" element={<FavoritesUser/>} />
            {/* <Route path="/category" element={<RegistrationUser/>} /> */}
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}