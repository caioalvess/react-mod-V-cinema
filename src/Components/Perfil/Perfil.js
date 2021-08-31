import React, { Component } from "react";
import "./Perfil.modules.css";
import chip from "../../assets/img/chip.png";

export class Perfil extends Component {
  render() {
    return (
      <div className="container">
        <div className="info">
          <div className="foto"></div>
          <div className="formPerfil"></div>
        </div>
        <div className="payout">
          <div className="payment">
            <div className="bg"></div>
            <div className="card">
              <img className="chip" src={chip} alt="" />
              <div className="logoCard"></div>
              <h2 className="bankName">CineResilia Bank</h2>
              <div className="inputBox">
                <span>Nº</span>
                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="0123 4567 8901 2345"
                  maxLength="19"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
