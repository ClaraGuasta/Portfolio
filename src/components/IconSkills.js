import React from 'react';

function IconSkills({icon, title}){
    return(
        <>
        <div className="conteinerIconsSkills"><i className={`fab ${icon}`}></i><p>{title}</p> </div>
        </>
    )
}

export default IconSkills;