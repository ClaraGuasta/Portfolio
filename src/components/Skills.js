import React from 'react';
import IconSkills from "./IconSkills.js";
import reactLogo from "../assets/img/reactLogo.png";
import jsLogo from "../assets/img/jsLogo.png";
import tailwindLogo from "../assets/img/logotw.png";
import tsLogo from "../assets/img/tsLogo.png";
import nxtLogo from "../assets/img/nxtLogo.png";
import reacttestingLogo from "../assets/img/reacttestingLogo.png";
import jestLogo from "../assets/img/jestLogo.png";
import gitLogo from "../assets/img/gitLogo.png";

function Skills(){
    return(
        <section className='m-9 lg:m-24' id="skills">
            <h2 className='text-2xl m-auto lg:text-4xl lg:ml-4 mb-6 lg:mb-10 w-fit p-6 rounded-lg'>Mis Skills</h2>
            <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-white rounded-lg">
                <IconSkills 
                    title={"React.Js"} 
                    learntInActuality={false} 
                    url={reactLogo} 
                    color={"bg-malibu"} 
                />
                <IconSkills 
                    title={"JavaScript"} 
                    learntInActuality={false} 
                    url={jsLogo} 
                    color={"bg-ronchi"}
                />
                <IconSkills 
                    title={"Tailwind"} 
                    learntInActuality={true} 
                    url={tailwindLogo} 
                    color={"bg-cerulean"}
                />
                <IconSkills 
                    title={"TypeScript"} 
                    learntInActuality={true} 
                    url={tsLogo} 
                    color={"bg-mariner"}
                />
                <IconSkills 
                    title={"Next"} 
                    learntInActuality={true} 
                    url={nxtLogo} 
                    color={"bg-black"}
                />
                <IconSkills 
                    title={"React Testing"} 
                    learntInActuality={true} 
                    url={reacttestingLogo} 
                    color={"bg-cinnabar"}
                />
                <IconSkills 
                    title={"Jest"} 
                    learntInActuality={true} 
                    url={jestLogo} 
                    color={"bg-camelot"}
                />
                <IconSkills 
                    title={"GitHub"}
                    learntInActuality={false} 
                    url={gitLogo} 
                    color={"bg-flamingo"}
                />
            </div>
        </section>
    )
}

export default Skills
