import React, { Component } from "react";
import Menu from "../Menu/Menu";
import "./ingresso.modules.css";

export class Ingresso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      contador: 1,
      preco: 16.0,
    };
    this.loadFilmes = this.loadFilmes.bind(this);
    this.diminuir = this.diminuir.bind(this);
    this.aumentar = this.aumentar.bind(this);
  }

  diminuir() {
    let state = this.state;
    if (state.contador === 1 && state.preco === 16) {
      return;
    }
    state.contador -= 1;
    state.preco -= 16;
    this.setState(state);
  }

  aumentar() {
    let state = this.state;
    state.contador += 1;
    state.preco += 16;
    this.setState(state);
  }

  componentDidMount() {
    this.loadFilmes();
  }

  loadFilmes() {
    const { id } = this.props.match.params;
    let url = `http://diegoesg.com:2020/filme/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        let { dado } = json;
        this.setState({ filmes: dado });
        console.log(dado);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Menu />
        <div className="containerIngresso">
          <div className="boxFilme">
            <img src={this.state.filmes.poster} alt="" />
            <div className="boxInfoFilme">
              <div className="tituloFilme">
                <h1>{this.state.filmes.titulo}</h1>
              </div>
              <div className="infoFilme">
                <h3 style={{ marginRight: "30px" }}>
                  {this.state.filmes.lancamento}
                </h3>
                <h3 style={{ marginRight: "30px" }}>
                  {this.state.filmes.duracao}
                </h3>
                <h3>{this.state.filmes.genero}</h3>
              </div>
              <div className="snopseFilme">
                <p>{this.state.filmes.sinopse}</p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              margin: "0",
              padding: "0",
            }}
          >
            <h1 style={{ margin: "50px 0 0 0", padding: "0" }}>Trailer:</h1>
          </div>
          <div className="boxPagamento">
            <div className="capaFilme">
              <img src={this.state.filmes.capa} alt="" />
            </div>
            <div className="trailerFilme">
              <iframe src={this.state.filmes.trailer} frameborder="0"></iframe>
            </div>
          </div>
          <div className="pagamento">
            <h1>Comprar Ingresso:</h1>
            <h2>Filme: {this.state.filmes.titulo}</h2>
            <div className="count">
              <h2>Total: R$ {this.state.preco}</h2>
              <div className="count2">
                <button onClick={this.diminuir}>-</button>
                <h2>{this.state.contador}</h2>
                <button onClick={this.aumentar}>+</button>
              </div>
              <a className="comprarFilme" href="">
                <h2 onClick={this.confirmarCompra}>Comprar</h2>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Ingresso;
