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
          <div
            style={{
              height: "80px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "1100px",
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
                borderBottomLeftRadius: "40px",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Filmes em cartaz</h2>
            </div>
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
                          style={{
                            width: "200px",
                            height: "300px",
                            objectFit: "cover",
                          }}
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
