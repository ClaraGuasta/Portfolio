import React from 'react';

function Skills(){
    return(
        // <!-- SKILLS -->
        <section className="skills" id="skills">
         <h2>Mis skills</h2>
         <div className="conteinerSkills">
          <div className="conteinerIconsSkills"><i className="fab fa-js"></i><p>JavaScript</p> </div>
          <div className="conteinerIconsSkills"><i className="fab fa-github"></i><p>Git Hub</p></div> 
           <div className="conteinerIconsSkills"><i className="fab fa-html5"></i><p>Html</p></div>
           <div className="conteinerIconsSkills"><i className="fab fa-css3-alt"></i><p>Css</p></div>
           <div className="conteinerIconsSkills"><i className="fab fa-react"></i><p>React</p></div>
           <div className="conteinerIconsSkills"><i className="fab fa-node-js"></i><p>Node Js</p></div>
         </div>
        </section>
    )
}

export default Skills
