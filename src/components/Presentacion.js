import React from 'react';
import cv from "../assets/img/cv1.jpg"
import fondo from "../assets/img/fondo3.jpg"
import "../assets/css/Presentacion.css"

function Presentacion() {
    return( 
   <div className="presentacion">
	   <img src={fondo} className="presentacion-fondo" alt="fondo"/>
	   <img src={cv} className="presentacion-cv" alt="cv"/>
	   <p className="presentacion-hola">Hola!</p>
	   <h1>Soy Clara Guastavino</h1>
	   <h3>Desarrolladora Web Full Stack</h3>
   </div>
	)}

export default Presentacion;