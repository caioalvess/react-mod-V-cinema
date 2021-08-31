import React, { Component } from "react";
import "./Filmes.modules.css";

export class Filmes extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100vh", overflowY: "scroll" }}>
        <div className="generos">
          <ul>
            <li>Ação</li>
            <li>Terror</li>
            <li>Comédia</li>
            <li>Romance</li>
            <li>Drama</li>
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
