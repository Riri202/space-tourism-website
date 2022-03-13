import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ crew, destination, technology, background }) {
    return (
        <div className='flex justify-between pt-12'>
            <div className='pl-12'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
                
            </div>

          
                
                <div className=' backdrop-blur-3xl w-1/2'>
                    <div className='flex space-x-9 px-20 mr-4 '>
                        <Link to={'/'} onClick={background}>
                         <button className='flex space-x-2 py-5 transition-all ease-out hover:border-b-4 font-sans '>
                            <p className='font-bold'>00</p>
                            <p className=' tracking-widest font-thin'>HOME</p>
                        </button>
                        </Link>
                        <Link to={'/destination/'} onClick={destination}>
                        <button className='flex space-x-1 py-5 transition-all ease-out hover:border-b-4'>
                            <p className='font-bold '>01</p>
                            <p className=' tracking-widest font-light'>DESTINATION</p>
                        </button>
                        </Link>
                        <Link to={'/crew/'} onClick={crew}>
                        <button className='flex space-x-1 py-5 transition-all ease-out hover:border-b-4'>
                            <p className='font-bold'>02</p>
                            <p className=' tracking-widest font-light'>CREW</p>
                        </button>
                        </Link>
                        <Link to={'/technology/'} onClick={technology}>
                        <button className='flex space-x-1 py-5 transition-all ease-out hover:border-b-4'>
                            <p className='font-bold'>03</p>
                            <p className=' tracking-widest font-light'>TECHNOLOGY</p>
                        </button>
                        </Link>
                    </div>
                </div>
            
        </div>
    )
}

export default Navbar