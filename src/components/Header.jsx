import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import Button from './Button'

const Header = () => {
  return (
    <div className=' flex justify-between bg-body  items-center sticky top-0 z-[20] mx-auto shadow-lg p-6 font-abc'>
          <Logo/>
          <Nav/>
          <Button/>
    </div>
  )
}

export default Header