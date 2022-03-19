/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react'
import Data from '../data.json'
import Anousheh from '../assets/crew/image-anousheh-ansari.png'
import Douglas from '../assets/crew/image-douglas-hurley.png'
import Mark from '../assets/crew/image-mark-shuttleworth.png'
import Victor from '../assets/crew/image-victor-glover.png'

let count = 0

function Crew() {
  const [crew, setCrew] = useState(0)
  // const slideRef = useRef

  const handleNextCrew = () => {
    count = (count + 1) % Data.crew.length
    setCrew(count)
    //slideRef.current.classList.add("fade-anim");

  }
  const handlePrevCrew = () => {
    let crewCount = Data.crew.length
    count = (crew + crewCount - 1) % crewCount
    setCrew(count)
    //slideRef.current.classList.add("fade-anim");

  }

  // const removeAnimation = () => {
  //   slideRef.current.classList.remove("fade-anim");
  // };

  // useEffect(() => {
  //   startSlider();
  //   slideRef.current.addEventListener("animationend", removeAnimation);
  // }, []);

  // let slideInterval;
  // const startSlider = () => {
  //   slideInterval = setInterval(() => {
  //     handleNextCrew();
  //   }, 3000);
  // };

  // const startSlider = () => {
  //   setInterval(() => {
  //     handleNextCrew();
  //   }, 3000);
  // };

  const images = {
    0: Douglas,
    1: Mark,
    2: Victor,
    3: Anousheh
  }
  // useEffect(() => {
  //   startSlider();
  // }, []);


  return (
    <>
      {Data.crew.map((person, key) => {
        if (crew === person.id) {
          return (
            <>
              <div key={key}  className="carousel sm:h-[110vh] slide my-auto relative" data-bs-ride="carousel">
                      {/* Contains Crew Info, Carousel Indicators and crew Images */}
                <div className="carousel-inner relative flex flex-col space-y-5 sm:space-y-0 justify-center items-center sm:flex-row text-center sm:text-left  pl-20 pr-20 w-full overflow-hidden">
                 <div className='flex flex-col space-y-12 md:pl-20'>
                  <div className='space-y-16 sm:space-y-20 w-full'>
                    <div className='pt-10 text-base sm:text-xl  md:text-[1.75rem] flex self-start tracking-widest'><span className='font-bold text-grey mr-3'>02</span> MEET YOUR CREW</div>
                    
                    <div className='flex flex-col justify-center space-y-8'>
                      <div className='flex flex-col space-y-8 uppercase'>
                        <p className='text-base sm:text-2xl md:text-[32px] font-serif text-grey'>{person.role}</p>
                        <h1 className='text-2xl sm:text-[40px] md:text-[50px] tracking-wider font-serif'>{person.name} </h1>
                      </div>
                    </div>
                    </div>
                      <div className='flex justify-center items-center w-full md:w-1/2'>
                      <p className='md:text-lg  font-sans text-secondary '>{person.bio} </p>
                      </div>

                    {/* Carousel indicators */}
                    <div className="carousel-indicators flex justify-center sm:justify-start space-x-3 p-0 mb-4">
                      <button
                        type="button"
                        className={person.id === 0 ? "w-3 h-3 rounded-full bg-primary" : "w-3 h-3 rounded-full bg-grey"}
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        className={person.id === 1 ? "w-3 h-3 rounded-full bg-primary" : "w-3 h-3 rounded-full bg-grey"}

                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        className={person.id === 2 ? "w-3 h-3 rounded-full bg-primary" : "w-3 h-3 rounded-full bg-grey"}
                        aria-label="Slide 3"
                      ></button>
                      <button
                        type="button"
                        className={person.id === 3 ? "w-3 h-3 rounded-full bg-primary" : "w-3 h-3 rounded-full bg-grey"}
                        aria-label="Slide 4"
                      ></button>
                    </div>
                 </div>
                        {/* Crew Images */}
                  <div className="carousel-item active md:pr-20 w-full">
                    <img
                      src={images[person.id]}
                      className="block"
                      alt="crew member" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-10 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                  onClick={handlePrevCrew}
                >
                  <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' fill='white' viewBox="0 0 320 512"><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" /></svg>
                    {/* <!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  </span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-10  text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                  onClick={handleNextCrew}
                >
                  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' fill='white' viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" /></svg>
                    {/* <!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  </span>

                </button>
              </div></>
          )
        }
      })}

    </>
  )
}

export default Crew