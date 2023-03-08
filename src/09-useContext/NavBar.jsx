import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    // <>
    //   {/*
    //   OJO: Solo con los a< href > se utilizan cuando quiero navegar a un lugar o bien FUERA
    //   de mi app o bien dentro, pero quiero que se vuelva a recargar todos los
    //   componentes de dicho sitio
    //   */}
    //   {/* OTRA COSA: EL LINK SE CONVIERTE A "a" EN HTML */}
    //   <Link className="btn btn-primary me-3" to="/">
    //     Home
    //   </Link>
    //   <Link className="btn btn-primary me-3" to="/about">
    //     About
    //   </Link>
    //   <Link className="btn btn-primary me-3" to="/login">
    //     Login
    //   </Link>
    // </>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        useContext
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <NavLink 
            to="/"
            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
            </NavLink>

            <NavLink 
            to="/about"
            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                About
            </NavLink>

            <NavLink 
            to="/login"
            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                Login
            </NavLink>
        </ul>
      </div>
    </nav>
  );
};
