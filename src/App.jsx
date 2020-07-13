import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Protected from "routes/Protected";
import Specialities from "./pages/Specialites/index";
import Public from "./routes/Public/index";
import Specialitie from "pages/Specialitie";
import Course from "./pages/Course/index.jsx";
import Teachers from "./pages/Teachers/index.jsx";
import Fragment from "./pages/Fragment/index.jsx";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register";
import Page404 from "pages/404";
import Header from "components/Organisms/Header";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Protected exact path="/" component={Home} />
          <Protected exact path="/especialidades" component={Specialities} />
          <Protected path="/especialidades/:id" component={Specialitie} />
          <Protected exact path="/cursos" component={Specialities} />
          <Protected path="/cursos/:id" component={Course} />
          <Protected exact path="/profesores" component={Teachers} />
          <Protected path="/clase/:id" component={Fragment} />
          <Public path="/login" component={Login} />
          <Public path="/registrer" component={Register} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
