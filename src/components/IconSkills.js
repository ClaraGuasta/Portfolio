import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { calculateMonths } from '../functions/dates';

function IconSkills({ title, url, learntInActuality, color }){
    const [isClicked, handleClicked] = useState(false);
    const [monthsPassed, setMonthsPassed] = useState(0);
    const handleClick = (() => {
        handleClicked(!isClicked)
    })
    console.log(title, url, learntInActuality, color);
    useEffect(() => {
      setMonthsPassed(calculateMonths());
    }, []);
    return(
        <>
            <div className={classNames(
            color, 
            "w-60 h-40 lg:w-64 lg:h-56 xl:h-40 xl:w-60 m-auto rounded-lg relative px-12 shadow-ls cursor-pointer")} 
            onClick={handleClick}>
                <img className='text-center relative w-11/12 top-2 flex justify-center self-center my-2 blur-sm cursor-pointer' src={url} alt='react-logo'/>
                <div className={classNames("ease-out shadow-inbf w-full h-full rounded-lg absolute top-0 left-0 z-1",
                "transition delay-150 duration-1000")}></div>
                <div className={classNames(`w-full h-full  rounded-lg absolute top-0 left-0 z-1 hover:shadow-inaf ${color}`, 
                {"hover:shadow-none": isClicked}, "transition-all duration-500", {"bg-transparent" : !isClicked})}></div>
                <div className={classNames('z-2 absolute top-15 right-7 md:right-12 lg:top-22 xl:top-1/3 xl:right-10 flex flex-col text-center', { "flex": isClicked}, { "hidden" : !isClicked})}>
                    <h2 className='text-2xl'>{title}</h2>
                    <p>{learntInActuality ? `${monthsPassed} meses de` : "1 año de experiencia"}</p>
                </div> 
            </div>
        </>
    )
}

export default IconSkills;