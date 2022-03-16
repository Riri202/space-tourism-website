/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import Data from '../data.json'
import Vehicle from '../assets/technology/image-launch-vehicle-portrait.jpg'
import Spaceport from "../assets/technology/image-spaceport-portrait.jpg"
import Capsule from "../assets/technology/image-space-capsule-portrait.jpg"


function Technology() {
  const [tech, setTech] = useState(0)

  const handleFirst = () => {
    setTech(0)
  }
  const handleSecond = () => {
    setTech(1)
  }
  const handleThird = () => {
    setTech(2)
  }

  const images = {
    0 : Vehicle,
    1: Spaceport,
    2: Capsule,
   
  }

  return (
  
    <div className='h-screen'>
      <div className='text-2xl pt-10 pl-20'><span className='font-thin  text-secondary mr-3'>03</span>SPACE LAUNCH 102</div>
      <div>
      <div className='flex flex-row space-x-12'>
        <div className='flex flex-col space-y-12 pl-20 my-auto'>
          <button onClick={handleFirst} className='w-14 h-14 rounded-full ring-2 ring-secondary focus:bg-primary focus:ring-0 focus:text-main transition-all ease-out duration-150'>
            1
          </button>
          <button onClick={handleSecond}  className='w-14 h-14 rounded-full ring-2 ring-secondary focus:bg-primary focus:ring-0 focus:text-main transition-all ease-out duration-150'>
            2
          </button>
          <button onClick={handleThird}  className='w-14 h-14 rounded-full ring-2 ring-secondary focus:bg-primary focus:ring-0 focus:text-main transition-all ease-out duration-150'>
            3
          </button>
        </div>
        <div>
        {Data.technology.map((product, key) => {
          if (product.id === tech) {
            return (
              <div key={key} className='flex flex-row justify-between'>
              <div  className='flex flex-col w-1/3 space-y-5 my-auto'>
                <p className='font-thin text-secondary uppercase'>The technology</p>
                <h1 className='text-6xl font-serif tracking-wider'>{product.name}</h1>
                <p> {product.description} </p>
              </div>

              <div className='my-auto'>
                <img src={images[product.id]} alt='technology'/>
              </div>
              </div>
            )
          }

        })}
        </div>
      </div>
      </div>


    </div>
    
  )
}

export default Technology