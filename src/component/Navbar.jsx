import React from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'


const navItems =['Nexus','vault','market','prologue','About','Contact']

const Navbar = () => {
    const nevContainerRef = React.useRef(null)
  return (
    <div
    ref={nevContainerRef}
    className='fixed z-50 h-16  border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute  w-full'>
        <nav className='flex size-full  item-center justify-between'>
            <div className='flex items-center gap-5 '>
                <a href='#' className='nav-hover-btn '>
                    <img src='/img/logo.png' alt='Logo' className='w-16 h-16' />
                </a>
                <Button
                it="product-button"
                title="Product"
                rightIcon={<TiLocationArrow/>}
                containerClass="!bg-blue-50 md:flex   hidden  item-center justify-center gap-1 rounded-full"/>
            </div>

            <div className='flex h-full items-center p-5 '>
                <div className='hidden md:block'>
                    {navItems.map((item, index) => (
                       <a className='nav-hover-btn' key={index} href={`#${item.toLowerCase()}`}>
                        {item}

                       </a>
                    ))}


                </div>
                <button className='nav-hover-btn'></button>

            </div>
        </nav>
        </header>

    </div>
  )
}

export default Navbar