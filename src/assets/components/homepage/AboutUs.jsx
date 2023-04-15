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
                    markers:true
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
          duration:1
        }
        )
    })

  return (
    <main className='relative h-screen w-screen'>
        <div className="about-container absolute w-full h-full top-0 left-0 text-white">
            <div className="flex justify-center items-center h-full">
                <h1 className="line-through text-5xl">CXPTURED</h1>
            </div>
        </div>
    </main>
  )
}

export default AboutUs