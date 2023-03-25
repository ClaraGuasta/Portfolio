import React, { useEffect, useState } from 'react';
import { ComputerDesktopIcon } from "@heroicons/react/24/outline"


function Experience() {
  const [monthsPassed, setMonthsPassed] = useState(0);
  useEffect(() => {
    const startDate = new Date('2022-05-16');
    const currentDate = new Date();

    const months = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
    setMonthsPassed(months);
  }, []);

  return( 
      <section className='m-9 lg:m-24 lg:mr-80 gap-2 p-6 lg:p-10 bg-[#faf3dd] rounded-lg shadow-ls text-black' id="experience">
        <h2 className='text-2xl lg:text-3xl pb-2 mb-6 lg:mb-10 lg:mr-56 border-b border-[#6d6875]'>Experiencia Profesional</h2>
        <div className='flex flex-row gap-3 items-center'>
          <ComputerDesktopIcon alt='computer icon' className='w-10 lg:w-14 paddin absolute left-[40px] lg:left-[108px] bg-[#CB9CF2] rounded-full p-2 lg:p-3' />
          <div className='border-l border-black border-dotted p-6 lg:p-10'> 
            <h2 className='text-xl mb-3 lg:font-bold border-b border-black lg:w-[50%]'>Digital House</h2>
            <p className='text-sm lg:text-base pl-4 mb-2'>Mayo 2022 - Actualidad .{monthsPassed} Meses</p>
            <li className='text-sm lg:text-base'>Desarrollo de componentes para página web de la empresa.</li>
            <li className='text-sm lg:text-base'>Consumo de API's.</li>
          </div>
        </div>
      </section>
    
	)}

export default Experience;