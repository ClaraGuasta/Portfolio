import React from 'react';
import cv from "../assets/img/cvPhoto.jpeg"
import bgImage from "../assets/img/fondo2.jpg"

function Home() {
    return( 
        <section className="relative flex flex-col text-center justify-center items-center bg-almostBlack p-12 pt-1/10 min-h-screen" id="home">
          <div className="fondoHome"></div>
          <div className="conteinerHomeTodo">
            <img alt="foto-cv" src={cv} className="imagenHome" />
            <div className="conteinerHome">
              <h2 className='text-aliceBlue text-3xl font-body md:text-5xl'>Hola!</h2>
              <h1 className='text-perfume text-4xl font-body md:text-6xl md:font-bold'>Soy Clara Guastavino</h1>
              <h3 className='text-aliceBlue text-3xl font-body md:text-5xl'>Desarrolladora Full Stack</h3>
            </div>
          </div>
        </section>
	)}

export default Home;