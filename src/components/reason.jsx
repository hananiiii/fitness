import React from 'react'
import Why from '../assets/why.jpg'
const reason = () => {
  return (
    <section className=' bg-body  w-full h-screen font-abc lg:-mt-64 lg:pt-24 sm:pt-[200px] pt-[700px]'>
        <h1 className='font-abc text-4xl text-title hover:text-primary flex justify-center mx-auto '>Reasons to choose us </h1>
           <div className="container flex flex-wrap  items-center justify-center mx-auto pt-12 md:px-32 md:flex-row">

               <div className=" lg:mb-0 lg:w-1/2 ">
               <img className=" md:w-[500px] lg:mt-0 mt-8  md:h-[500px] w-[450px] h-[430px] rounded-lg" src={Why} alt=""/>

                
                 
               </div>
               <div className="lg:w-1/2 lg:pt-0 pt-12">
               
                 <div className='grid md:grid-cols-2 grid-cols-1 lg:px-0 px-8 gap-12'>
                      <div className='flex flex-col gap-3 '>
                        <div className='flex flex-row gap-3 text-primary text-xl font-medium'>
                        <span className='text-2xl'><ion-icon name="man"></ion-icon></span>
                       <span>Expert Guidance:</span> 
                        </div>
                       
                        <p className='text-sm text-title leading-7'>Our team of certified fitness trainers and nutritionists are dedicated to helping you achieve your goals. With personalized workout plans and nutritional advice, you're in capable hands.</p>
                      </div>
                      <div className='flex flex-col gap-3 '>
                        <div className='flex flex-row gap-3 text-primary text-xl font-medium'>
                        <span className='text-2xl'><ion-icon name="flag"></ion-icon></span>
                       <span> Facilities:</span> 
                        </div>
                       
                        <p className='text-sm text-title leading-7'>
                         Enjoy top-notch equipment, spacious workout areas, and a clean, welcoming environment. We invest in the best for your comfort and safety.
                            </p>
                      </div>
                      <div className='flex flex-col gap-3 '>
                        <div className='flex flex-row gap-3 text-primary text-xl font-medium'>
                        <span className='text-2xl'><ion-icon name="file-tray-stacked"></ion-icon></span>
                       <span>Community Support:</span> 
                        </div>
                       
                        <p className='text-sm text-title leading-7'> Join a vibrant community of like-minded individuals who are on the same path to fitness success. You'll find motivation, camaraderie, and a shared commitment to wellness.</p>
                      </div>
                      <div className='flex flex-col gap-3 '>
                        <div className='flex flex-row gap-3 text-primary text-xl font-medium'>
                        <span className='text-2xl'><ion-icon name="expand"></ion-icon></span>
                       <span>Results-Driven:</span> 
                        </div>
                       
                        <p className='text-sm text-title leading-7'> We don't just promise results; we deliver them. Our track record of success stories speaks volumes about our commitment to helping you achieve your fitness dreams.</p>
                      </div>
                    
                 </div>
                  
               </div>

           </div>
    </section>
  )
}

export default reason