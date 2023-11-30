import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/MainPage";
import AutorizationUser from "./pages/autorization/autorization";
import RegistrationUser from "./pages/registration/registranion";
import FavoritesUser from "./pages/favorites/favorites";
import Category from "./pages/category/category";
import { NotFound } from "./pages/not-found";
import { ProtectedRoute } from "./pages/protected-route/protected";
export const AppRoutes = ({user, handleLogin, outLogin, tracks, setTracks, addError}) => { 

  return (
    <Routes>
      <Route
        path="/login"
        element={<AutorizationUser handleLogin={handleLogin} user={user} />}
      />
      <Route path="/register" element={<RegistrationUser />} />
      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route path="/" element={<Main outLogin={outLogin} user={user} tracks={tracks} setTracks={setTracks} addError={addError}/>} />
        <Route path="/favorites" element={<FavoritesUser />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
