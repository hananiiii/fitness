import React from 'react'

const footer = () => {
  return (
    <div className='bg-title w-screen h-[250px]'>
        <div className='px-16 py-8 flex justify-between'>
            <h1 className='items-center my-auto text-body font-bold text-2xl'>contact us </h1>
            <input
            placeholder='Email'
            className=' bg-body rounded-md text-title text-lg p-4  lg:w-[500px]'
            />
        </div>
        <span className='flex justify-center mx-auto mb-8 gap-8 text-3xl text-body hover:text-primary'>
           <ion-icon name="logo-facebook"></ion-icon>
             <ion-icon name="logo-instagram"></ion-icon>
             <ion-icon name="logo-twitter"></ion-icon>

        </span>
        <div className=" text-center ">
        <p>&copy; 2023 Your Car Website. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default footer