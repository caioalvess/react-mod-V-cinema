import React from "react";
import { Switch, Route } from "react-router-dom";
import Filmes from "./Components/Filmes/Filmes";
import Login from "./Components/Login/Login";
import Menu from "./Components/Menu/Menu";
import Sobre from "./Components/Sobre/Sobre";
import Ingresso from "./Components/Ingresso/Ingresso";
import Loading from "./Components/Loading/Loading";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 3500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading === true && <Loading />}
        {this.state.loading === false && (
          <div style={{ display: "flex", height: "100vh", width: "100%" }}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/filmes">
                <Menu />
                <Filmes />
              </Route>
              <Route path="/sobre">
                <Menu />
                <Sobre />
              </Route>
              <Route
                path="/ingresso/:id"
                render={(props) => <Ingresso {...props} />}
              />
            </Switch>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
