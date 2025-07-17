import React from 'react'
import './index.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroPage = () => {
useGSAP(()=>{
  let tt=gsap.timeline()
  let tl=gsap.timeline()

  tt.fromTo('.text',{opacity: 0},{opacity: 1})
  .fromTo('.text',{zIndex:0},{zIndex:2})
  .to('.img-2',{onStart:()=>{
       document.querySelector('.img-2').classList.add('blur-active')
  }})
  .to('.text',{opacity:0})
   
  tl.fromTo('.blog',{yPercent:100},{yPercent:0})
 

  ScrollTrigger.create({
    trigger:'.img-container',
    start:'top 5%',
    end:'+=20%',
    scrub:true,
    markers: true,
    animation:tt,
    pin:true    
  })
   ScrollTrigger.create({
    trigger:'.img-container',
    start:'top 5%',
    end:'+=0%',
    scrub:true,
    markers: true,
    animation:tt,
    pin:true    
  })

},[])

  return (
    <>
    <div className='full-page'>
      <div className='img-container'>
        <img className='img-1' src="./img/chin.png" alt="img-1" />
        <img className='img-2' src="./img/chin2.png" alt="img-2" />
        <div className='text'><h1>Hi I am CHIN </h1></div>
      </div>
       <div className='blog bg-black'>
    </div>
   

    </div>
    </>
  )
}

export default HeroPage
