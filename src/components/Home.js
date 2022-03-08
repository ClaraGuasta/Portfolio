import React from 'react';
import cv from "../assets/img/cv3.jpg"

function Home() {
    return( 
        // <!-- HOME -->
        <section className="home" id="home">
          <div className="fondoHome"></div>
          <div className="conteinerHomeTodo">
            <img src={cv} className="imagenHome" />
          <div className="conteinerHome">
            <h2>Hola!</h2>
            <h1>Soy Clara Guastavino</h1>
            <h3>Desarrolladora Full Stack</h3>
          </div>
          </div>
        </section>
	)}

export default Home;