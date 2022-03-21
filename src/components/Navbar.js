/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ crew, destination, technology, background }) {
    const [showNav, setShowNav] = useState(true)
    const [hideNav, setHideNav] = useState(true)


   const handleNav = () => {
        setShowNav(!showNav)
    }
    // const handleHideNav = () => {
    //     setHideNav(!hideNav)
    // }
   
    return (
        <div className='flex justify-between pt-12'>
            <a href='/' className='pl-12'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
            </a>

            <div>
                <button onClick={handleNav} className='mr-5 sm:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" className={showNav ? 'hidden' : 'block'} width="30" height="30" fill='#D0D6F9' viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>
                    {/* <!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}

                    <svg xmlns="http://www.w3.org/2000/svg" className={!showNav ? 'hidden' : 'block'}  width="30" height="30" fill='#D0D6F9' viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                    {/* <!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                </button>
                
                <div className={(showNav ? 'left-1/3' : 'left-full') + '  z-20 fixed bottom-0 top-28 w-3/4 sm:static  sm:flex sm:w-auto transition-all ease-in duration-200 backdrop-blur-3xl'}>
                    <div className='flex flex-col space-y-7 sm:space-y-0 sm:flex-row sm:space-x-9 px-11 sm:px-20 sm:mr-4'>
                        <Link to={'/'} onClick={background}>
                            <button className='flex space-x-2 py-5 transition-all ease-out hover:border-b-4 hover:border-grey focus:border-b-4 focus:border-primary active:border-b-4 active:border-primary font-sans '>
                                <p className='font-bold'>00</p>
                                <p className=' tracking-widest font-thin'>HOME</p>
                            </button>
                        </Link>
                        <Link to={'/destination/'} onClick={destination} >
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

        </div>
    )
}

export default Navbar