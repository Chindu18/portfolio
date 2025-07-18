// HeroPage.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroPage = () => {
 

  useGSAP(() => {
     gsap.to('.left-content,.right-content',{
      scrollTrigger:{
        trigger:'.child1',
        start:'top 99.9%',
        end:'top 98%',
        scrub:true,
      },
      opacity:0
     })

    const tl = gsap.timeline();
    const tl2=gsap.timeline();
    const tl3=gsap.timeline();


    tl.fromTo('.child1', { yPercent: 100 }, { yPercent: 0 })
  
    tl2.fromTo('.text',{opacity:0},{opacity:1})
    .fromTo('.text',{zIndex:0},{zIndex:2}) 
      
   tl3.fromTo('.text', {display:'flex',alignItems:'center',justifyContent:'center'},{
   top: '-180px', 
   scale: 0.5, })
   .to('.text-h1',{letterSpacing:'7px'});

    ScrollTrigger.create({
      trigger: ".hero-page",
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      animation: tl,
     
    });

    ScrollTrigger.create({
      trigger:'.child1',
      start:'top 95%',
      end:'+=30%',
      animation:tl2,
      scrub:true,
     
    })

    ScrollTrigger.create({
  trigger: '.child1',
  start: 'top center',
  end: 'top top',
  scrub: true,
  animation: tl3,
  
});

  }, []);

  return (
    <div className='hero-wrapper'>
      <div className='hero-page'>
        <div className='left-content'>
          <div className='ll'>
           <div className='hello'>Hello</div>
            <div className='info'>scroll down to see my blog + projects</div>
          </div>    
        </div>
         <div className='right-content'>
          <div className='ll'>
           <div className='hello'>Guys!</div>
            <div className='info'>scroll down to see my blog + projects</div>
          </div>    
        </div>
       

        <div className='img'> <img  src="./img/chin.png" alt="" /></div>
        <div className='text'><h1 className='text-h1'>Hi, I'm Web Developer!</h1></div>
         <div className='img1'> <img  src="./img/chin2.png" alt="" /></div>
        <div className='layer child1'>

        </div>
       
      </div>
    </div>
  );
};

export default HeroPage;
