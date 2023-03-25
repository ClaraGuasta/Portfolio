import React from 'react';

function Contact(){
    return(
        // <!-- CONTACT -->
        <section className="contact" id="contact">
          <h2>Contacto</h2> 
          <p>Puedes contactarme por cualquiera de estos medios en caso de que quieras que trabajemos juntos.</p>
          <div className="conteinerRedes">
            <div className="divsRedes"><a href="mailto:cmguastavino@hotmail.com?"><i className="far fa-envelope"></i></a><p>Mail</p></div>
            <div className="divsRedes"><a href="https://github.com/ClaraGuasta"><i className="fab fa-github-square"></i></a><p>GitHub</p></div>
            <div className="divsRedes"><a href="https://www.linkedin.com/in/claraguastavino/"><i className="fab fa-linkedin"></i></a><p>Linkedin</p></div>
          </div>
        </section>
    )
}

export default Contact