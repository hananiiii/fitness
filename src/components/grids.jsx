import React from 'react'
import GRid_1 from '../assets/grid1.jpg'
import GRid_2 from '../assets/grid2.jpg'
import GRid_3 from '../assets/grid3.jpg'
import './grids.css'
const grids = () => {
  return (
    <section className='bg-body w-full h-screen lg:block hidden'>
         <div className='px-12 py-32 w-full h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
               <div className='w-full h-full  '>
                <img src={GRid_3}/>
               </div>
               <div className='text-title px-12 py-8 '>
                <h1 className=' font-bold text-3xl flex justify-center mx-auto mb-8'>Gym for man</h1>
                <p className='font-normal text-md text-center mb-8'>"Strength training forms the cornerstone of any well-rounded fitness regimen, empowering individuals to build muscle, increase metabolism, and improve overall physical prowess."</p>
                <button className='animated-button p-4 flex justify-center mx-auto text-title bg-primary rounded-sm'>Learn more</button>
               </div>
               <div>
                <img src={GRid_1}/>
               </div>
               <div className='text-title px-12 py-8'>
                <h1 className=' font-bold text-3xl flex justify-center mx-auto mb-8'>Gym for Women</h1>
                <p className='font-normal text-md text-center mb-8'>"Strength training tailored for women focuses on building lean muscle, enhancing metabolism, and promoting overall physical well-being."</p>
                <button className='animated-button p-4 flex justify-center mx-auto text-title bg-primary rounded-sm'>Learn more</button>
               </div>
               <div>
                <img src={GRid_1}/>
               </div>
               <div className='text-title px-12 py-8'>
                <h1 className=' font-bold text-3xl flex justify-center mx-auto mb-8'>Gym for Kids</h1>
                <p className='font-normal text-md text-center mb-8'>""Kid-friendly strength training programs incorporate fun and engaging exercises that promote healthy growth, coordination, and confidence in children."</p>
                <button className='animated-button p-4 flex justify-center mx-auto text-title bg-primary rounded-sm'>Learn more</button>
               </div>
         </div>
    </section>
  )
}

export default grids