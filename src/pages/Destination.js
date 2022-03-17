/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Data from '../data.json'
import MoonBG from '../assets/destination/image-moon.png'
import MarsBG from '../assets/destination/image-mars.png'
import EuropaBG from '../assets/destination/image-europa.png'
import TitanBG from '../assets/destination/image-titan.png'

function Destination() {
  const [destination, setDestination] = useState('Moon')




  const handleMoon = () => {
    setDestination('Moon')
  }

  function handleMars() {

    setDestination('Mars')

  }
  const handleEuropa = () => {
    setDestination('Europa')
  }
  const handleTitan = () => {
    setDestination('Titan')
  }

  const images = {
    Moon: MoonBG,
    Mars: MarsBG,
    Europa: EuropaBG,
    Titan: TitanBG
  }

  return (
    <>
      <div className='flex justify-center items-center md:justify-start'>
      <div className='text-2xl flex pt-10 md:ml-20 tracking-widest'><span className='font-bold text-grey mr-3'>01</span>PICK YOUR DESTINATION</div>
      </div>






      {destination && Data.destinations.map((place, key) => {
        if (place.name === destination) {
          return (<>


            <div key={key} className='flex flex-col items-center text-center md:text-left md:flex-row md:justify-center md:space-x-40 p-20'>
              <div>
                <img src={images[place.name]} alt='destination' />
              </div>

              <div className='flex flex-col mt-11 md:mt-0 md:w-1/3 space-y-10'>
                <div className='flex justify-center md:justify-start'>    
                <nav className='flex space-x-6 md:pr-12 text-secondary '>
                  <button onClick={handleMoon} className='py-3 transition-all ease-out hover:border-b-4 hover:border-primary font-sans '>
                    <p className='md:text-lg tracking-widest font-thin'>MOON</p>
                  </button>
                  <button onClick={handleMars} className='py-3 transition-all ease-out hover:border-b-4 hover:border-primary font-sans '>
                    <p className='md:text-lg tracking-widest font-thin'>MARS</p>
                  </button>
                  <button onClick={handleEuropa} className='py-3 transition-all ease-out hover:border-b-4 hover:border-primary font-sans '>
                    <p className=' tracking-widest font-thin'>EUROPA</p>
                  </button>
                  <button onClick={handleTitan} className='py-3 transition-all ease-out hover:border-b-4 hover:border-primary font-sans '>
                    <p className='md:text-lg tracking-widest font-thin'>TITAN</p>
                  </button>
                </nav>
                </div>

                <h1 className='text-6xl tracking-wider uppercase font-serif'>{place.name === destination ? place.name : null}</h1>

                <div>
                  <p className='md:text-lg text-secondary'> {place.description}</p>
                </div>
                <div className='ring-top ring-1 w-full ring-secondary '></div>
                <div className='flex  flex-col space-y-5 text-center md:flex-row md:text-left md:space-y-0 md:space-x-12'>
                  <div className='flex flex-col space-y-3'>
                    <p className='text-sm font-sans text-secondary tracking-widest'>AVG. DISTANCE</p>
                    <p className='text-3xl font-serif uppercase tracking-widest'>{place.distance}</p>
                  </div>

                  <div className='flex flex-col space-y-3'>
                    <p className='text-sm font-sans text-secondary tracking-widest'>EST. TRAVEL TIME</p>
                    <p className='text-3xl font-serif uppercase tracking-widest'>{place.travel}</p>
                  </div>
                </div>
              </div>
            </div>


          </>)
        }
      })}

    </>
  )
}

export default Destination