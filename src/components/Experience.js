import React, { useEffect, useState } from 'react';
import { ComputerDesktopIcon } from "@heroicons/react/24/outline"
import { calculateMonths } from '../functions/dates';


function Experience() {
  const [monthsPassed, setMonthsPassed] = useState(0);
  useEffect(() => {
    setMonthsPassed(calculateMonths());
  }, []);

  return( 
      <section className='m-9 lg:m-24 lg:mr-80 gap-2 p-6 lg:p-10 bg-citrineWhite rounded-lg shadow-ls text-black' id="experience">
        <h2 className='text-2xl lg:text-3xl pb-2 mb-6 border-b border-saltBox'>Experiencia Profesional</h2>
        <div className='flex flex-row gap-3 items-center'>
          <ComputerDesktopIcon alt='computer icon' className='w-10 lg:w-14 paddin absolute left-10 lg:left-6rm bg-perfume rounded-full p-2 lg:p-3' />
          <div className='border-l border-black border-dotted p-6 lg:p-10'> 
            <h2 className='text-xl mb-3 lg:font-bold border-b border-black lg:w-1/2'>Digital House</h2>
            <p className='text-sm lg:text-base pl-4 mb-2'>Mayo 2022 - Actualidad .{monthsPassed} Meses</p>
            <li className='text-sm lg:text-base'>Desarrollo de componentes para página web de la empresa.</li>
            <li className='text-sm lg:text-base'>Consumo de API's.</li>
          </div>
        </div>
      </section>
    
	)}

export default Experience;