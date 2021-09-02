import React, { Component } from "react";
import "./Sobre.modules.css";

export class Sobre extends Component {
  render() {
    return (
      <div className="container">
        <div className="titulo">
          <h1 className="princ-titulo">Nossa história</h1>

          <h6 className="sub-titulo">
            “Os melhores filmes, lanches e bebidas em um único assento.”
          </h6>
          <hr />
        </div>

        <div className="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/A9s_30sekDE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="text">
          <p>
            <i>
              {" "}
              “No Cine Resilia temos bons lanches, boas bebidas e ótimos filmes,
              tudo isso em um único lugar!”{" "}
            </i>
            <br />É assim que nos descrevemos em 1997,{" "}
            <strong>e essa missão não mudou e nunca, jamais mudará</strong>. Por
            mais de duas décadas, trabalhamos para tornar a experiência do Cine
            Resilia a melhor experiência cinematográfica do mundo. <br />
            <h3>
              {" "}
              <i> Os melhores filmes já feitos.</i>
            </h3>
            <strong> Não queremos ser apenas mais um multiplex</strong>. Todos
            os que trabalham no Cine Resilia , dos gerentes aos garçons e à
            equipe da cozinha, são apaixonados por cinema. <br />
            Para nós, a última entrada no Universo Cinematográfico Marvel ou DC
            Universe pode ser tão digna de atenção e celebração quanto um drama
            em língua estrangeira. <br />
            Celebrar o cinema clássico também é algo que levamos a sério. Quer
            seja uma apresentação interativa da Movie Party de um clássico
            atemporal, um banquete inspirado no chef com um menu emparelhado com
            um filme ou uma reavaliação de uma joia perdida, adoramos
            compartilhar os filmes que amamos com o público do Cine Resilia de
            todas as idades.
            <br />
            Combinado com ótimas comidas e bebidas Quando você assiste a um
            filme na Alamo Drafthouse, você recebe bebidas geladas, refeições
            deliciosas e saborosas cervejas locais, servidas em seu assento por
            um garçom. Precisa de uma recarga grátis em sua pipoca ou
            refrigerante? Levante um cartão de pedido e cuidaremos disso
            rapidamente.
          </p>
        </div>

        <div className="map">
          <iframe
            title="mapa de localização"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6050.643435531986!2d-73.983991!3d40.6889117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4caa1435fb%3A0x7ef206cfa4a16608!2sResilia%20Drafthouse%20Cinema%20Downtown%20Brooklyn!5e0!3m2!1spt-BR!2sbr!4v1630529280523!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div class="footer">
          <h7>Cine Resilia 2021 - Alguns direitos Reservados</h7>
        </div>
      </div>
    );
  }
}

export default Sobre;
