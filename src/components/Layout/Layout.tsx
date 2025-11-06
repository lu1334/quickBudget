import { Link, Outlet, useLocation } from "react-router-dom";
import "./layout.css";

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout-wrapper">
      <Outlet />
      {location.pathname === "/" && (
        <nav className="qb-menu">
          <ul className="qb-menu__list">
            <li>
              <Link className="qb-menu__link" to="/form-income">
                Añadir ingreso
              </Link>
            </li>
            <li>
              <Link className="qb-menu__link" to="/form-expense">
                Añadir gasto
              </Link>
            </li>
            <li>
              <Link className="qb-menu__link" to="/show-items">
                Ver movimientos
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
