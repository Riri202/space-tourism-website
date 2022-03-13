/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
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
      <div className='text-8xl flex self-start'><span>01</span>PICK YOUR DESTINATION</div>
      <nav className='flex space-x-6'>
        <button onClick={handleMoon} className='py-3 transition-all ease-out hover:border-b-4 font-sans '>
          <p className=' tracking-widest font-thin'>MOON</p>
        </button>
        <button onClick={handleMars} className='py-3 transition-all ease-out hover:border-b-4 font-sans '>
          <p className=' tracking-widest font-thin'>MARS</p>
        </button>
        <button onClick={handleEuropa} className='py-3 transition-all ease-out hover:border-b-4 font-sans '>
          <p className=' tracking-widest font-thin'>EUROPA</p>
        </button>
        <button onClick={handleTitan} className='py-3 transition-all ease-out hover:border-b-4 font-sans '>
          <p className=' tracking-widest font-thin'>TITAN</p>
        </button>
      </nav>

      {destination && Data.destinations.map((place, key)=> {
        if (place.name === destination) {
          return (<>
            
          <div key={key} className='flex justify-between p-20'>
            <div>
              <img src={ images[place.name]}alt='destination' />
            </div>


            <div className='flex flex-col w-1/2 space-y-10'>



              <h1 className='text-6xl'>{place.name === destination ? place.name : null}</h1>

              <div>
                <p> {place.description}</p>
              </div>
              <div className='ring-top ring-1 w-full ring-secondary'></div>
              <div className='flex space-x-12'>
                <div>
                  <p>AVG. DISTANCE</p>
                  <p>{ place.distance}</p>
                </div>

                <div>
                  <p>EST. TRAVEL TIME</p>
                  <p>{ place.travel}</p>
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