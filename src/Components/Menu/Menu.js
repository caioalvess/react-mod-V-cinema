import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.modules.css";
import imgPerfil from "../../assets/img/perfil.png";
import imgFilmes from "../../assets/img/play-button (4).png";
import imgSobre from "../../assets/img/help-button.png";
import imgContato from "../../assets/img/call.png";
export class Menu extends Component {
  render() {
    return (
      <div className="perfilAndMenu">
        <div className="perfilBox">
          <div className="fotoPerfil"></div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to="/perfil"
              >
                <img
                  style={{
                    width: "50px",
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%) ",
                  }}
                  src={imgPerfil}
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to="/filmes"
              >
                <img
                  style={{
                    width: "50px",
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%) ",
                  }}
                  src={imgFilmes}
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to="/sobre"
              >
                <img
                  style={{
                    width: "50px",
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%) ",
                  }}
                  src={imgSobre}
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to="/contato"
              >
                <img
                  style={{
                    width: "50px",
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%) ",
                  }}
                  src={imgContato}
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="logOffBox">L</div>
      </div>
    );
  }
}

export default Menu;