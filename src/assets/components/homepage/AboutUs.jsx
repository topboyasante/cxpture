import { gsap,Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'

function AboutUs() {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline(
            {
                scrollTrigger:{
                    trigger:".about-container",
                    scrub:0.6,
                    start:"top 80%",
                    end:"bottom 100%",
                }
            }
        )
        tl.to(".nav-main",{
            maxWidth:"100vw",
            duration:1,
            ease:Power1.easeIn
        })
        tl.to(".nav-main",{
            color:"white",
            duration:1,
            ease:Power1.easeIn
        })
        tl.fromTo(".about-container",
        {
          clipPath:'polygon(0 0, 0 0, 0 100%, 0 100%)'
        },
        {
          clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
          duration:2,
          ease:Power1.easeIn
        }
        )
    })

  return (
    <main className='relative h-screen w-screen'>
        <div className="about-container absolute w-full h-full top-0 left-0 text-white">
            <div className="flex flex-col justify-center items-center h-full p-5">
                <h1 className="line-through text-5xl">CXPTURED</h1>
                <br />
                <p className='w-[80%] text-center text-xl lg:text-2xl'>CXPTURE is a creative and innovative photography company specializing in capturing 
                timeless images that tell your story. With a team of experienced photographers and state-of-the-art equipment, 
                we offer personalized experiences for weddings, portraits, events, and commercial photography. Our focus on quality and 
                attention to detail has earned us a reputation as one of the leading photography companies in the industry. Let us help you 
                capture your memories and create stunning images that you will treasure for a lifetime.</p>
            </div>
        </div>
    </main>
  )
}

export default AboutUs