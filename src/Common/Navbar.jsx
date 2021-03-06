import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand text-white">Mentlify App</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
       <NavLink to="/" className="nav-link text-white">inicio</NavLink>
       <NavLink to="/" className="nav-link text-white">Estrenos</NavLink>
       <NavLink to="/" className="nav-link text-white">Estrenos</NavLink>
      </ul>
      <form className="d-flex">
        <input className="me-2 border-0" type="search" placeholder=" Buscar Pelicula" aria-label="Search" />
        <button className="boton text-white" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  </>;
};

export default Navbar;
