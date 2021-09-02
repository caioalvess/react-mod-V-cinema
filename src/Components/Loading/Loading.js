import React, { Component } from "react";
import "./Loading.modules.css";

export class Loading extends Component {
  render() {
    return (
      <div className="containerLoading">
        <h2 className="animate">CARREGANDO</h2>
      </div>
    );
  }
}

export default Loading;
