import React from 'react'

function Homepage() {
  return (
    <div className='flex justify-between p-20 pt-40 w-11/12' >
      <div className='flex flex-col space-y-4'>
        <p className='font-sans text-secondary text-2xl tracking-wider'>SO YOU WANT TO TRAVEL TO</p>
        <h1 className='font-serif text-9xl tracking-widest'>SPACE</h1>
        <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </div>

      <div>
        <button className='h-72 w-72 rounded-full bg-primary text-main font-serif font-light tracking-wider text-4xl'> EXPLORE </button>
      </div>
    </div>
  )
}

export default Homepage