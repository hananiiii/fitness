import React from 'react'
  
const types= [
     {
        icon: <ion-icon name="flame"></ion-icon>,
        title :"Burning calories",
        text:'Burning calories is a fundamental aspect of maintaining a healthy weight and overall well-being. various functions and activities'
     },
     {
        icon: <ion-icon name="pulse"></ion-icon>,
        title :"Health fitness ",
        text:'Health fitness encompasses a holistic approach to well-being, emphasizing physical, mental, and emotional health'
     },
     {
        icon: <ion-icon name="accessibility"></ion-icon>,
        title :"Cardio training ",
        text:'cardio, is vital for improving cardiovascular health, stamina, and burning calories. with basic cardio training  '
     },
     {
        icon: <ion-icon name="flame"></ion-icon>,
        title :"Strength training",
        text:"Strength training is an essential component of a balanced fitness routine, helping to build muscle, increase metabolic rate."
     },
]

const program = () => {
  return (
    <section className='pt-12 bg-body  w-full h-screen  font-abc  '>
      <h1 className='font-abc text-4xl text-title hover:text-primary flex justify-center mx-auto '>Our Program</h1>
      <div className='w-full h-[250px]    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-12 pt-24'>
        {types.map((type, index) => (
          <div key={index} className='flex flex-col  bg-title hover:bg-primary text-primary hover:text-white  cursor-pointer   rounded-md hover:transform hover:-translate-y-1 hover:shadow-md transition-transform duration-300'>
            <div className='flex flex-row gap-4 px-4 pt-8'>
              <span className='text-2xl  '> {type.icon}</span>
              <h3 className='text-xl font-bold mb-8  '>{type.title}</h3>
            </div>
            <p className='text-body px-4 mb-8 '>{type.text}</p>
            <button className=' px-4 flex justify-start bg-none  mb-8  gap-2'>Join now <span className='text-center text-xl my-auto items-center'><ion-icon name="arrow-forward"></ion-icon></span></button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default program