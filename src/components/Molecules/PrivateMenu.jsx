import React from "react";
import { NavLink, Link, Redirect } from "react-router-dom";
const removeToken = () => {
  localStorage.removeItem("token");
  return <Redirect to="/login" />;
};
const PrivateMenu = () => {
  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink to="/especialidades">Especialidades</NavLink>
      </li>
      <li>
        <NavLink to="/cursos">Cursos</NavLink>
      </li>
      <li>
        <NavLink to="/profesores">Profesores</NavLink>
      </li>

      <li>
        <Link onClick={() => removeToken()}>Cerrar Sesion</Link>
      </li>
    </ul>
  );
};

export default PrivateMenu;
