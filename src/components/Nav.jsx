import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <div className='navbar'>
        <ul className='text-with-gradual-underline lg:flex hidden lg:flex-row gap-12   font-abc '>
            <li className=' text-with-gradual-underline cursor-pointer text-[#C0C0C0] hover:text-primary'>Home</li>
            <li className=' text-with-gradual-underline cursor-pointer text-[#C0C0C0] hover:text-primary'>Program</li>
            <li className='text-with-gradual-underline cursor-pointer text-[#C0C0C0] hover:text-primary'>Why us</li>
            <li className='text-with-gradual-underline cursor-pointer text-[#C0C0C0] hover:text-primary'>Pricing</li>
            <li className='text-with-gradual-underline cursor-pointer text-[#C0C0C0] hover:text-primary '>Contact us</li>
        </ul>
    </div>
  )
}

export default Nav