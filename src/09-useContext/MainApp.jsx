import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    // Como estoy poniendo el user provider en el componente padre de
    // todos los componentes, todos ellos van a tener acceso a los 
    // datos del provider
    <UserProvider>
      <h1>MainApp</h1>
      <NavBar />
      <hr className="hr-lg" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* Si quiero que si cualquier enlace se escribe mal, le lleve siempre al login page: */}
        {/* <Route path="/*" element={<LoginPage />} /> */}
        {/* PERO HAY UNA FORMA MÁS ELEGANTE */}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  );
};
