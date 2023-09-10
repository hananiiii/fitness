import React from "react";
import Heroo from "../assets/gym.png";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import './hero.css'
const Hero =() =>{
    return (
        <section id="hero" className=" bg-body font-abc ">
           <div className="container flex flex-wrap  items-center justify-center mx-auto lg:pt-0 pt-20 md:px-32 md:flex-row">
               <div className=" lg:mb-0 lg:w-1/2 ">
                <div className="the-best font-medium text-sm lg:-mt-16 mb-8 border border-primary text-title flex mx-auto lg:mx-0 justify-center">
                    <div className="move"></div>
                    <span>Unmatched Fitness Excellence in Your City</span>
                </div>
                  <h1 className="max-w-xl text-[2.7rem] leading-16 text-title font-black font-sans text-center sm:text-5xl text-3xl lg:text-left sm:leading-tight mb-5">
                    Build your <span className="text-primary text animated-text"> Dream body
          </span>
                  </h1>
                  <p className="max-w-xl  text-center text-gray-400 lg:text-left md:max-w-md  lg:text-lg md:text-md text-md ">
                  Transform your body, mind, and spirit in a supportive and empowering environment.
                  </p>
                  <div class="text-primary body-font ">
  <div class="container py-8 mx-auto">
    <div class="flex flex-wrap lg:-ml-12 sm:ml-32  text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-title">2.7K</h2>
        <p class="leading-relaxed">Participants</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-title">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2 lg:block sm:block  hidden">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-title">1K</h2>
        <p class="leading-relaxed">Satisfaied</p>
      </div>
     
    </div>
  </div>
</div>
                  <div className="flex justify-center gap-8  lg:justify-start">
                     <Link to="/Join"><button type="button" className="text-title  bg-primary font-medium w-32 rounded-sm px-5 py-4 text-center  hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer">
                        Join Us
                     </button>
                     </Link>
                     <Link to="/About"><button type="button" className=" border border-lg border-primary text-title w-32 px-5 py-4 text-center rounded-sm hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer ">
                       About us
                     </button>
                     </Link>
                  </div>
               </div>
               <div className="lg:w-1/2">
                  <img className="lg:ml-[100px] ml-auto md:w-[600px] lg:mt-0 mt-8  md:h-[700px] w-[450px] h-[430px] rounded-lg" src={Heroo} alt=""/>
               </div>

           </div>
        </section>
    )
}
export default Hero;