import React, { Component } from "react";

export class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      confirmSenha: "",
      error: "",
      usuario: [],
    };
    //BIND
    this.cadastrar = this.cadastrar.bind(this);
  }

  //VALIDAÇÃO DO CADASTRO
  cadastrar(event) {
    let { email, nome, senha, confirmSenha } = this.state;
    if (email === "" || nome === "" || senha === "" || confirmSenha === "") {
      this.setState({
        error: "Oops! Acho que está faltando alguma coisa.",
      });
    } else if (this.state.senha !== this.state.confirmSenha) {
      this.setState({ error: "Oops! Senhas diferentes." });
    } else if (this.state.nome.length > 1 && this.state.nome.length < 4) {
      this.setState({ error: "O nome deve ter no mínimo 6 caracteres." });
    } else if (this.state.senha.length > 1 && this.state.senha.length < 6) {
      this.setState({
        error: "A senha deve ter no mínimo 8 e no máximo 70 caracteres.",
      });
    } else {
      let dataCadastro = {
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha,
      };
      let url = "http://diegoesg.com:2020/usuarios";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataCadastro),
      })
        .then((response) => response.json())
        .then((json) => {
          let state = this.state;
          state.usuario = json;
          this.setState(state);
          let dados = json;
          if (dados.login === true) {
            this.setState({ loginError: "Cadastro realizado com sucesso!" });
          }
          console.log(dados);
        });
    }
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form>
          <h1>Cadastro</h1>
          {this.state.error ? (
            <p style={{ position: "absolute", bottom: "0", color: "tomato" }}>
              {this.state.error}
            </p>
          ) : null}
          <label htmlFor="nome">Nome e Sobrenome: </label>
          <input
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
          />
          <label htmlFor="email">E-mail: </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <label htmlFor="senha">Senha: </label>
          <input
            type="password"
            name="senha"
            value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })}
          />
          <label htmlFor="confirmSenha">Confirme a senha: </label>
          <input
            type="password"
            name="confirmSenha"
            value={this.state.confirmSenha}
            onChange={(e) => this.setState({ confirmSenha: e.target.value })}
          />
          <button
            className="entrar-hover entrar20"
            type="submit"
            onClick={this.cadastrar}
          >
            Cadastrar
          </button>
        </form>
      </div>
    );
  }
}

export default Cadastro;
