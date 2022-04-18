import React from 'react';
import IconSkills from "./IconSkills.js";

function Skills(){
    return(
        // <!-- SKILLS -->
        <section className="skills" id="skills">
         <h2>Mis skills</h2>
         <div className="conteinerSkills">
             <IconSkills icon=" fa-js" title="JavaScript"/>
             <IconSkills icon=" fa-github" title="Git Hub"/>
             <IconSkills icon=" fa-html5" title="Html"/>
             <IconSkills icon=" fa-css3-alt" title="Css"/>
             <IconSkills icon=" fa-react" title="React"/>
             <IconSkills icon=" fa-node-js" title="Node Js"/>
         </div>
        </section>
    )
}

export default Skills
