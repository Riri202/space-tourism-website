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
              <div key={key} id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active w-6 h-6 rounded-full bg-primary"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner relative flex justify-between pl-20 pr-20 w-full overflow-hidden">
                  <div className='space-y-28 w-1/2'>
                    <div  className='pt-10 text-2xl'><span className='font-thin text-secondary mr-3'>02</span> MEET YOUR CREW</div>
                    <div className='flex flex-col justify-center space-y-9 p-10'>
                      <p className='text-2xl font-serif text-secondary'>{person.role}</p>
                      <h1 className='text-6xl tracking-wider font-serif'>{person.name} </h1>
                      <p>{person.bio} </p>
                    </div>
                  </div>

                  <div className="carousel-item active">
                    <img
                      src={images[person.id]}
                      className="block w-full"
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
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-10 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                  onClick={handleNextCrew}
                >
                  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div></>
          )
        }
      })}

    </>
  )
}

export default Crew