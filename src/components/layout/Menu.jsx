import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/param/123">Parametros #01</Link>
          </li>
          <li>
            <Link to="/param/legal">Parametros #02</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/naoexiste">Não existe</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
