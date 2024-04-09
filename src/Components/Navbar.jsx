import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextApp } from "../App";

function Navbar() {
  const Mc = useContext(ContextApp);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          🍕 PIZZERIA MAMMA MIA
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/carrito" className="nav-link fs-3">
                🛒Carrito $ {Mc.total}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
