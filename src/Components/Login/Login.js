import React, { Component } from "react";
import { Cadastro } from "../Cadastro/Cadastro";
import { Redirect } from "react-router";
import "./Login.modules.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      status: 1,
      email: "",
      senha: "",
      newNome: "",
      newEmail: "",
      newSenha: "",
      confirmSenha: "",
      loginError: "",
      usuarios: [],
    };

    //BIND
    this.setStatus1 = this.setStatus1.bind(this);
    this.setStatus2 = this.setStatus2.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  //CONDIÇÃO PARA RENDERIZAR LOGIN
  setStatus1() {
    this.setState({ status: 1 });
    if (this.state.loginError !== "") {
      this.setState({ loginError: "" });
    }
  }

  //CONDIÇÃO PARA RENDERIZAR CADASTRO
  setStatus2() {
    this.setState({ status: 2 });
    if (this.state.loginError !== "") {
      this.setState({ loginError: "" });
    }
  }

  //VALIDAÇÃO DE USUÁRIO E SENHA
  entrar(event) {
    let { email, senha } = this.state;
    if (email === "" || senha === "") {
      this.setState({
        loginError: "Oops! Acho que está faltando alguma coisa.",
      });
    } else {
      let data = {
        email: this.state.email,
        senha: this.state.senha,
      };
      let url = "http://diegoesg.com:2020/login";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => {
          let state = this.state;
          state.usuarios = json;
          this.setState(state);
          let dados = json;
          if (dados.login === false) {
            this.setState({ loginError: "Senha incorreta." });
          } else {
            this.setState({ redirect: true });
          }
          console.log(dados);
        });
    }

    event.preventDefault();
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="title">
          <div className="logo"></div>
          <h1>
            Cine<span>Resilia</span>
          </h1>
        </div>
        <div className="formBox">
          <div className="buttomBox">
            <button className="bn632-hover bn20" onClick={this.setStatus1}>
              Login
            </button>
            <button className="bn632-hover bn20" onClick={this.setStatus2}>
              Cadastro
            </button>
          </div>
          {this.state.status === 1 && (
            <form>
              <h1>Login</h1>
              {this.state.loginError ? (
                <p
                  style={{ position: "absolute", bottom: "0", color: "tomato" }}
                >
                  {this.state.loginError}
                </p>
              ) : null}
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                name="senha"
                value={this.state.senha}
                onChange={(e) => this.setState({ senha: e.target.value })}
              />
              <a style={{ color: "#fff" }} href="#">
                Esqueci minha senha
              </a>
              <button
                className="entrar-hover entrar20"
                type="submit"
                onClick={this.entrar}
              >
                Entrar
              </button>
            </form>
          )}
          {this.state.status === 2 && <Cadastro />}
          {this.state.redirect && <Redirect to="/filmes" />}
        </div>
      </div>
    );
  }
}

export default Login;
