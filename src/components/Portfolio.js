import React from "react";
import CardPortfolio from "./CardPortfolio";
import sklibros from '../assets/img/sklibros_.png'
import dashboard from '../assets/img/dashboard.png'
import weatherApp from '../assets/img/weatherApp-.png'

function Portfolio() {
  return (
    <>
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section__title">Portfolio</h2>
        <h3 className="section__subtitle">
          Acá se pueden ver los proyectos en los que trabajé
        </h3>
        <div className="portfolio__grid">
      <CardPortfolio imgUrl={sklibros} title="Sk Libros" text=" E-commerce funcional y responsive de libros.Realizado en el marco de
            Digital House." linkWeb="http://sklibros.herokuapp.com" linkRepo="https://github.com/ClaraGuasta/grupo_1_SKLibros" />
      <CardPortfolio imgUrl={dashboard} title=" Dashboard de Sk Libros" text=" Dashboard realizado con React, consumiendo la api del proyecto
                Sk Libros" linkWeb="http://sklibros.herokuapp.com" linkRepo="https://github.com/ClaraGuasta/dashboardSkLibros"/>
      <CardPortfolio imgUrl={weatherApp} title="Weather App" text="Weather App realizada con React, consumiendo una API mediante Axios." linkWeb="https://weatherapichallenge-guastavino.herokuapp.com/" linkRepo="https://github.com/ClaraGuasta/weatherApiChallenge" />
      </div>
      </div>
      </section>
    </>
  );
}

export default Portfolio;
