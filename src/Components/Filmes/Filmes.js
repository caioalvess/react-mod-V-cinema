import React, { Component } from "react";
import "./Filmes.modules.css";

export class Filmes extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100vh", overflowY: "scroll" }}>
        <div className="generos">
          <ul>
            <li className="bn638-hover bn28">Ação</li>
            <li className="bn638-hover bn28">Terror</li>
            <li className="bn638-hover bn28">Comédia</li>
            <li className="bn638-hover bn28">Romance</li>
            <li className="bn638-hover bn28">Drama</li>
          </ul>
        </div>
        <div className="filmes">
          <ul>
            <li>filme</li>
            <li>filme</li>
            <li>filme</li>
            <li>filme</li>
            <li>filme</li>
            <li>filme</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Filmes;
