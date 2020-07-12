import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Protected from "routes/Protected";
import Specialities from "./pages/Specialites/index";
import Public from "./routes/Public/index";
import Specialitie from "pages/Specialitie";
import Course from "./pages/Course/index";
import Teachers from "./pages/Teachers/index";
import Fragment from "./pages/Fragment/index";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Protected exact path="/" component={Home} />
          <Protected exact path="/especialidades" component={Specialities} />
          <Protected path="/especialidades/:id" component={Specialitie} />
          <Protected exact path="/cursos" component={Specialities} />
          <Protected path="/cursos/:id" component={Course} />
          <Protected exact path="/profesores" component={Teachers} />
          <Protected path="/clase/:id" component={Fragment} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
