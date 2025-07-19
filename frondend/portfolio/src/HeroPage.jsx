// HeroPage.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const HeroPage = () => {
 

  useGSAP(() => {
   const hello= new SplitText('.left-content,.right-content',{type:'chars,words'});
   

   gsap.from(hello.chars,{
    delay:1.1,
    autoAlpha:0,
    yPercent:200, 
    ease:'expo'
   })
    gsap.from('.blog-content',{
    
    yPercent:200, 
    opacity:0,
    scrollTrigger:{
      trigger:'.child1',
      start:'top 40%',
      end:'top top',
      scrub:true,
     
    }
    
   })

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
    const tt=gsap.timeline()
    tl.fromTo('.child1', { yPercent: 100 }, { yPercent: 0 })
    
  
    tl2.fromTo('.text',{opacity:0},{opacity:1,duration:15})
    .fromTo('.text',{zIndex:0},{zIndex:2, duration:15,delay:10} ) 
    .to('.text',{delay:2})
     .fromTo('.text', {display:'flex',alignItems:'center',justifyContent:'center',delay:2},{
   top: '-180px', 
   
   duration:50,
   scale: 0.5})
   .to('.text-h1',{letterSpacing:'7px',duration:9}); 
  
  
 
     tt.fromTo('.p1',{yPercent:100},{yPercent:0})
     .fromTo('.p2',{yPercent:100},{yPercent:10})
     .fromTo('.p3',{yPercent:100},{yPercent:20}) 


    ScrollTrigger.create({
      trigger: ".hero-page",
      start: "top top",
      end: "+=200%",
      scrub: true,
      pin: true,
      animation: tl,
     
    });

    ScrollTrigger.create({
      trigger:'.child1',
      start:'top 90%',
      end:'top top',
      animation:tl2,
      scrub:true,
     
    })

//     ScrollTrigger.create({
//   trigger: '.child1',
//   start: 'top center',
//   end: 'top top',
//   scrub: true,
//   animation: tl3,
  
// });


       ScrollTrigger.create({
      trigger:'.pr-div',
      start:'top top',
      end:'+=200%',
      animation:tt,
      scrub:true,
      pin:true
     })
  }, []);

  return (
    <>
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
                <div className='img1'> <img className='kk' src="./img/chin2.png" alt="" /></div>


       
              <section id='blog'>
              <div className='layer child1'>
                    <section className="about">
                      <h2 className='blog-content'>About Me</h2>
                      <p className='blog-content'>
                        Hi, I'm <strong>Chin</strong> — a passionate Web Developer based in Tamil Nadu. I specialize in crafting responsive, animated, and user-friendly websites using modern technologies like HTML, CSS, JavaScript, React, and Node.js.
                      </p>
                      <p className='blog-content'>
                        Whether it's building full-stack applications, designing beautiful UIs with Figma, or animating websites with GSAP, I love turning ideas into interactive digital experiences.
                      </p>
                      <p className='blog-content'>
                        When I'm not coding, I enjoy exploring UI/UX design trends, learning new tech tools, and constantly improving my development skills.
                      </p>
                  </section>
              </div>
            </section>
             

             

       </div>          
    </div>   

     <div className='bg-info w-100 vh-100 d-flex justify-content-center align-items-center pr-div'>
      <div className='pppp'>PROJECTS</div>
        <div className='bg-success project p1'></div>
        <div className='bg-primary project p2'></div>
        <div className='bg-secondary project p3'></div>
       </div>

       <div className="contact">
        
       </div>
    </>
  );
};

export default HeroPage;
