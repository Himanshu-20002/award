import React, { useEffect, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [hasClicked, setHasClicked] = React.useState(false)
  const [isloading, setIsloading] = React.useState(true)
  const [loadedVideos, setLoadedVideos] = React.useState(0)


  const totalVideos = 5;
  const nextVideoRef = React.useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1)
  }

  //   0%4 = 0 + 1, 1%4 = 1 + 1, 2%4 = 2 + 1, 3%4 = 3 + 1 , 4%4 = 0 + 1
  const upcomingVideoIndex = (currentIndex % totalVideos)+1


  const handleMiniVideoClick = () => {
    setHasClicked(true)
    setCurrentIndex(upcomingVideoIndex)
    
  }


   useEffect(() => {
    if(loadedVideos === totalVideos -2){
      setIsloading(false)
    }
    
  },[])

  useGSAP(() => {
    if(hasClicked)
      {
        gsap.set('#next-video',{visibility:'visible', scale:0})

        gsap.to('#next-video',
          {transformOrigin:'center center',
            scale:1,
            width:'100%',
            height:'100%',
            duration:1.1,
           ease:'power1.inOut',
            onStart: () => nextVideoRef.current.play(),
        })
        gsap.from('#current-video',{
          transformOrigin:'center center',
          scale:0,
          duration:1.5,
          ease:'power1.inOut',
        })


      }
  },{dependencies:[currentIndex],revertOnUpdate:true})

  useGSAP(() => {
    gsap.set('#video-frame',{
      clipPath: 'polygon(0% 0%, 0% 0%, 95% 80%, 1% 90%)'
      // borderRadius:'50%',


    })
    gsap.from('#video-frame',{
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%, 0% 0%)',
      duration:1,
      borderRadius:'0%',
      ease:'power1.inOut',
      scrollTrigger: {
      trigger: '#video-frame',
      start:'center center',
      end:'bottom center',
      scrub: true,
      },
    })
  }) 



      

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`


  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
   <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div>
          <div className='absolute-center absolute  z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
            <div onClick={handleMiniVideoClick} className='origin-center scale-50  opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                className='size-64 object-cover object-center scale-150 origin-center'
                autoPlay
                muted
                id='current-video'
                loop
                playsInline
                preload='auto'
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          {/* //main video */}
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            id='next-video'
            className='size-full absolute-center  object-cover object-center z-20  object-center invisible'
            autoPlay
            onLoadedData={handleVideoLoad}
            />
            <video 
            src={getVideoSrc(currentIndex ===totalVideos ?1:currentIndex+1)}
            autoPlay
            loop 
            muted
            className='absolute left-0 top-0 z-10 size-full object-cover object-center'
            onLoadedData={handleVideoLoad}
            />

        </div>
        <h1 className='special-font hero-heading text-[12px] height-4 absolute bottom-5 z-40 right-5 text-blue-75'>
          G<b>a</b>ming
        </h1>
        <div className='absolute left-0 top-0 z-40 size-full'>
          <div className='mt-24 px-5 sm:px-4'>
          <h1 className='special-font  hero-heading text-blue-100'style={{ fontSize: '84px' }} >redefi<b>n</b><b>e</b></h1>
          <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
            Enter the Metagame layer <br /> Uleash the play Economy</p>
            <Button id="watch-trailer" title="watch trailer" lefttIcon={<TiLocationArrow/>} 
            containerClass="!bg-yellow-300 flex-center gap-1"/>
         </div>       
        </div>

      </div>
        <h1 className='special-font hero-heading absolute bottom-5   right-5 text-black'>
          G<b>a</b>ming
        </h1>

    </div>
  )
}


export default Hero