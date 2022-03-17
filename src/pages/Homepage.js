import React from 'react'


function Homepage() {
  return (
    <div className='flex h-screen flex-col text-center space-y-8  md:text-left justify-center items-center md:flex-row md:justify-between p-20 pt-16' >
      <div className='flex flex-col space-y-10 md:space-y-4 md:w-1/2'>
        <p className='font-sans text-secondary text-xl md:text-2xl tracking-wider'>SO YOU WANT TO TRAVEL TO</p>
        <h1 className='font-serif text-7xl  md:text-9xl tracking-widest'>SPACE</h1>
        <p className='md:text-lg'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </div>

      <div>
        <button className='w-60 h-60 md:h-72 md:w-72 rounded-full bg-primary text-main font-serif font-light tracking-wider text-3xl md:text-4xl'> EXPLORE </button>
      </div>
    </div>
  )
}

export default Homepage