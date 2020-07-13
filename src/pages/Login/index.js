import React from "react";
import Axios from "axios";
const authentication = (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    email: form.email.value,
    password: form.password.value,
  };
  Axios.post("https://api-edteam.alejogs4.now.sh/login", data)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};
const Login = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar Sesión</h1>
        <form onSubmit={(e) => authentication(e)}>
          <div className="form__item">
            <label htmlFor="email">
              Correo Electronico
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su email"
                required
              />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingrese su contraseña"
                required
              />
            </label>
          </div>

          <div className="form_item">
            <input
              type="submit"
              className="button full"
              value="Iniciar Sesión"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
