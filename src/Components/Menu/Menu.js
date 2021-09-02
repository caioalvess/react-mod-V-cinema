import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.modules.css";
import imgFilmes from "../../assets/img/play-button (4).png";
import imgSobre from "../../assets/img/help-button.png";
import imgContato from "../../assets/img/call.png";
import logOff from "../../assets/img/power-button.png";
import logoPlay from "../../assets/img/botao-play.png";
export class Menu extends Component {
  render() {
    return (
      <div className="perfilAndMenu">
        <div className="perfilBox">
          <div className="fotoPerfil">
            <img
              style={{
                width: "60px",
              }}
              src={logoPlay}
              alt=""
            />
          </div>
        </div>
        <div className="menu">
          <ul>
            <li className="bn632-hover bn20">
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to="/filmes"
              >
                <img
                  style={{
                    width: "40px",
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%) ",
                  }}
                  src={imgFilmes}
                  alt=""
                />
              </Link>
            </li>
            <li className="bn632-hover bn20">
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to="/sobre"
              >
                <img
                  style={{
                    width: "40px",
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%) ",
                  }}
                  src={imgSobre}
                  alt=""
                />
              </Link>
            </li>
            <li className="bn632-hover bn20">
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to="/contato"
              >
                <img
                  style={{
                    width: "40px",
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
        <div className="bn635-hover bn25">
          <img
            style={{
              width: "40px",
              filter:
                "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%) ",
            }}
            src={logOff}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Menu;
