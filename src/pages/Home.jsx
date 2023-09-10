import React from 'react'
import Header from '../components/Header'
import Hero from '../components/hero'
import Program from '../components/program'
import Reason from '../components/reason'
import Grids from '../components/grids'
import Peicing from '../components/peicing'
import Footer from '../components/footer'
const Home = () => {
  return (
    <div  >
        <Header />
      
        <Hero />
       
         <Program />
         <Reason/>
         <Grids/>
         <Peicing/>
         <Footer/>
      
    </div>
  )
}

export default Home