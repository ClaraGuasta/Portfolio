import React from 'react';

function About() {
    return( 
        // <!-- ABOUT -->
        <section className="about" id="about">
          <div className="conteinerAbout">
            <h2 >Sobre Mí</h2>
            <p>
              Soy una desarrolladora FullStack con experiencia en realizar un
              e-commerce desde cero, incluyendo tanto el Frontend como el Backend del
              mismo. Me gustaría especializarme y desarrollarme profesionalmente en el
              ámbito de desarrollo FrontEnd.
            </p>
            <p>
              Estoy buscando aprender nuevas tecnologías y continuar aprendiendo
              aquellas que ya conozco. Disfruto trabajando en grupo utilizando GitHub,
              herramienta que permite la organización del código grupal.
            </p>
          </div>
          <a
                  className="botonAbout"
                  href="img/CV-ClaraGuastavino.pdf"
                  download="CV-ClaraGuastavino.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-file-download"></i> Descargar CV</a>
          </section>
    
	)}

export default About;