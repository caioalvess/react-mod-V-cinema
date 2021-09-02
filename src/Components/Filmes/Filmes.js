import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Filmes.modules.css";

export class Filmes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
    this.loadFilmes = this.loadFilmes.bind(this);
  }

  componentDidMount() {
    this.loadFilmes();
  }

  loadFilmes() {
    let url = "http://diegoesg.com:2020/filmes";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        let state = this.state;
        let { dados } = json;
        state.filmes = dados;
        this.setState(state);
      });
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100vh", overflowY: "scroll" }}>
        <React.Fragment>
          <div className="generos">
            <ul>
              <li className="bn638-hover bn28">Ação</li>
              <li className="bn638-hover bn28">Terror</li>
              <li className="bn638-hover bn28">Comédia</li>
              <li className="bn638-hover bn28">Romance</li>
              <li className="bn638-hover bn28">Drama</li>
            </ul>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              height: "100vh",
            }}
          >
            {this.state.filmes.map((item) => {
              return (
                <div key={item.id}>
                  <li style={{ width: "200px", margin: "20px" }}>
                    <button
                      style={{
                        width: "200px",
                        height: "300px",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    >
                      <Link to={`/ingresso/${item.id}`}>
                        <img
                          style={{ width: "200px" }}
                          src={item.capa}
                          alt=""
                        />
                      </Link>
                    </button>
                  </li>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Filmes;
