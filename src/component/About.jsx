import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import AnimatedTitle from './AnimatedTitle'
gsap.registerPlugin(ScrollTrigger)



const About = () => {
 useGSAP(() => {
  const clipAnimation = gsap.timeline({
    scrollTrigger:{
      trigger:'#clip',
      start:'center center',
      end:'+=800 center',
      scrub:0.5,
      pin:true,
      pinSpacing:true,
    }
  })

  clipAnimation.to('.mask-clip-path',{
    width:'100vw',
    height:'100vh',
    borderRadius:0
  })

})


  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center justify-center'>
        <h2 className='fornt-general tesxt-sm uppercase md:text-[10px]'>Welocme to Zentry</h2>
        {/* <div className='mt-5 text-center text-4xl uppercase leading-[0.8]md:text-[6rem]'>
          Disc<b>o</b>Ver the world's <br />l<b>a</b>rgest shared adventure
        </div> */}
        <AnimatedTitle title="Disc<b>o</b>Ver the world's <br/> 
        l<b>a</b>rgest shared adventure" containerClass='mt-5 text-center text-4xl uppercase !text-black'  />
        {/* //! what this is being used for  */}
        <div className='about-subtext'>
          <p>The Game of Games begins-your life, now and epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>



      </div>
      <div className='h-dvh w-screen object-contain' id='clip'>
        <div className='mask-clip-path  about-image'>
          <img 
          src='img/about.webp'
          alt='Background'
          className='absoulute left-0 top-0 size-full object-cover' />
        </div>
      </div>




    </div>

  )
}

export default About