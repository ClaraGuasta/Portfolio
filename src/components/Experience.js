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
      <section className='m-24 mr-80 gap-2 p-10 bg-[#faf3dd] rounded-lg shadow-ls text-black' id="experience">
        <h2 className='text-3xl pb-2 mb-10 mr-56 border-b border-[#6d6875]'>Experiencia Profesional</h2>
        <div className='flex flex-row gap-3 items-center'>
          <ComputerDesktopIcon alt='dh-logo' className='w-14 paddin absolute left-[108px] bg-[#CB9CF2] rounded-full py-3 px-3' />
          <div className='border-l border-black border-dotted p-10'> 
            <h2 className='text-xl mb-3 font-bold border-b border-black w-[50%]'>Digital House</h2>
            <p className='pl-4 mb-2'>Mayo 2022 - Actualidad .{monthsPassed} Meses</p>
            <li>Desarrollo de componentes para página web de la empresa.</li>
            <li>Consumo de API's.</li>
          </div>
        </div>
      </section>
    
	)}

export default Experience;
// const actualDate = Date.parse(new Date());
// const beginDate = Date.parse(new Date("May 16, 2022 00:00:00"));