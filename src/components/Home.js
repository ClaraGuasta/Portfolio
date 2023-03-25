import React from 'react';
import cv from "../assets/img/cvPhoto.jpeg"

function Home() {
    return( 
        <section className="home" id="home">
          <div className="fondoHome"></div>
          <div className="conteinerHomeTodo">
            <img alt="foto-cv" src={cv} className="imagenHome" />
            <div className="conteinerHome">
              <h2>Hola!</h2>
              <h1>Soy Clara Guastavino</h1>
              <h3>Desarrolladora Full Stack</h3>
            </div>
          </div>
        </section>
	)}

export default Home;