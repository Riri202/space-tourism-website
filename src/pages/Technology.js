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
    0: Vehicle,
    1: Spaceport,
    2: Capsule,

  }

  return (

    <div className='sm:h-[120vh]'>
      <div className='sm:text-xl  md:text-[1.75rem] pt-10 pl-20 tracking-widest'><span className='font-bold  text-grey mr-3'>03</span>SPACE LAUNCH 101</div>
      <div>
        <div className='flex sm:flex-row flex-col space-y-12 sm:space-x-12 sm:space-y-0'>
          <div className='hidden sm:flex flex-col  space-y-12 pl-20 my-auto'>
            <button onClick={handleFirst} className='w-14 h-14 font-serif rounded-full ring-1 ring-primary focus:bg-primary focus:ring-0 focus:text-main transition-all ease-out duration-150'>
              1
            </button>
            <button onClick={handleSecond} className='w-14 h-14 font-serif rounded-full ring-1 ring-primary focus:bg-primary focus:ring-0 focus:text-main transition-all ease-out duration-150'>
              2
            </button>
            <button onClick={handleThird} className='w-14 h-14 font-serif rounded-full ring-1 ring-primary focus:bg-primary focus:ring-0 focus:text-main transition-all ease-out duration-150'>
              3
            </button>
          </div>
          <div>
            {Data.technology.map((product, key) => {
              if (product.id === tech) {
                return (
                  <div key={key} className='flex flex-col-reverse sm:flex-row justify-between'>

                    <div className='flex flex-col w-full sm:w-1/2 p-16 sm:p-0 space-y-5 my-auto'>
                      <div className='flex flex-row justify-center sm:hidden space-x-12 sm:pl-20 my-auto'>
                        <button onClick={handleFirst} className='w-10 h-10 sm:w-14 sm:h-14 font-serif rounded-full ring-1 ring-primary focus:bg-primary focus:ring-0 focus:text-main transition-all ease-out duration-150'>
                          1
                        </button>
                        <button onClick={handleSecond} className='w-10 h-10 sm:w-14 sm:h-14 font-serif rounded-full ring-1 ring-primary focus:bg-primary focus:ring-0 focus:text-main transition-all ease-out duration-150'>
                          2
                        </button>
                        <button onClick={handleThird} className='w-10 h-10 sm:w-14 sm:h-14 font-serif rounded-full ring-1 ring-primary focus:bg-primary focus:ring-0 focus:text-main transition-all ease-out duration-150'>
                          3
                        </button>
                      </div>
                      <p className='font-thin text-sm sm:text-base text-secondary uppercase text-center sm:text-left'>The technology</p>
                      <h1 className='text-2xl sm:text-[40px] md:text-[56px] font-serif tracking-wider uppercase text-center sm:text-left'>{product.name}</h1>
                      <p className='text-secondary text-[15px] sm:text-[16px] md:text-lg text-center sm:text-left'> {product.description} </p>
                    </div>

                    <div className='my-auto'>
                      <img src={images[product.id]} alt='technology' className='w-full md:w-auto'/>
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