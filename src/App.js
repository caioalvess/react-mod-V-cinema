import React from "react";
import { Switch, Route } from "react-router-dom";
import Perfil from "./Components/Perfil/Perfil";
import Filmes from "./Components/Filmes/Filmes";
import Login from "./Components/Login/Login";
import Menu from "./Components/Menu/Menu";
import Sobre from "./Components/Sobre/Sobre";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
    };
  }
  render() {
    return (
      <div style={{ display: "flex", height: "100vh", width: "100%" }}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/filmes">
            <Menu />
            <Filmes />
          </Route>
          <Route path="/perfil">
            <Menu />
            <Perfil />
          </Route>
          <Route path="/sobre">
            <Menu />
            <Sobre />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
