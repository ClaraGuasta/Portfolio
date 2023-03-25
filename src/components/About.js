import React, { useState } from 'react';
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import michiFoto from '../assets/img/michi.jpg'
import classNames from 'classnames';

function About() {
  const [isClicked, setClick] = useState(false);
  const handleClick = (() => {
    setClick(!isClicked)
  })
  return( 
    <section className="flex lg:flex-row gap-3 justify-center m-9 lg:m-24 flex-col" id="about">
      <div className="flex lg:flex-col lg:w-1/2 gap-3 text-white">
        <div className='bg-[#6d6875] w-[109%] h-fit rounded-lg p-6 lg:p-10 shadow-ls'>
          <h2 className='text-2xl lg:text-3xl border-b border-white pb-2'>Sobre Mi</h2>
          <p className='font-body p-2'>
          Mi nombre es Clara Guastavino, tengo 20 años y soy Desarrolladora Frontend de Argentina. 
          Busco maneras de 
          aprender y mejorar mis habilidades. Soy una persona muy versátil y adaptable, 
          lo que me permite trabajar en diferentes proyectos.
          </p>
        </div>
        <div className='hidden lg:flex relative'>
          <img src={michiFoto} className="w-full rounded-xl shadow-ls cursor-pointer" alt='cat rogrammer' onClick={handleClick}/>    
          <p className={classNames("p-6 top-1/2 rounded-lg",{"visible text-black bg-white absolute left-[122px] opacity-100 transition-all duration-600" : isClicked}, {"invisible opacity-0" : !isClicked})}>
            PD: Me gustan mucho los gatitos y leer. 
          </p>
        </div>
      </div>

      <div className='bg-[#6d6875] lg:w-1/2 h-fit text-white rounded-lg p-6 lg:p-10 lg:pt-[83px] shadow-ls'>
        <p className='font-body p-2 lg:pt-3 lg:border-t lg:border-white'>
        Una de mis cualidades más destacadas es mi sociabilidad. Me encanta interactuar con nuevas personas y
        me siento cómoda trabajando en equipo. De hecho, considero que el trabajo en equipo es fundamental para lograr grandes resultados.
        Siempre estoy dispuesta a brindar mi ayuda, y soy una persona comprometida con mi trabajo.
        </p>
        <p className='font-body p-2'>
        Espero tener la oportunidad de trabajar en nuevos proyectos y seguir creciendo
        como profesional y como persona. 
        </p>
        <p className='font-body p-2'>¡Gracias por leer mi presentación!</p>
        <div className='mt-6'>
          <a 
              className="font-body font-bold p-4 bg-[#faf3dd] rounded-xl text-black hover:bg-[#CB9CF2] transition-all flex flex-row gap-2 w-fit"
              href="./ClaraGuastavinoCV.pdf"
              download>
            <ArrowDownTrayIcon className='w-6 h-6 flex'/>
            {" "}
            Descargar CV
          </a>
        </div>
      </div>
    </section>
	)}

export default About;

         