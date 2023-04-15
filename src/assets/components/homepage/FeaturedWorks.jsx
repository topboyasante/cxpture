import { gsap,Power1 } from 'gsap'
import React, { useEffect } from 'react'

function FeaturedWorks() {
    useEffect(()=>{
        const tl = gsap.timeline(
            {
                scrollTrigger:{
                    trigger:".featured-container",
                    scrub:0.6,
                    start:"top 80%",
                    end:"bottom 100%",
                }
            }
        )
        tl.to(".nav-main",{
            maxWidth:"1600px",
            duration:1,
            ease:Power1.easeIn
        })
        tl.fromTo(".featured-work-text",
            
            {
                x:"200vw"
            },
            {
                x:0, 
                duration:2
            }
        ).fromTo(".featured-work-subtext",{
            x:"-100vw"
        },
        {
            x:0, 
            duration:1.5
        })
    })
  return (
    <main>
        <section className='max-w-[1600px] mx-auto h-full featured-container'>
            <section className='my-3 overflow-hidden'>
                <h1 className='featured-work-text text-3xl md:text-5xl lg:text-8xl uppercase text-center shadow-text'>//Featured Work</h1>
                <h1 className='featured-work-subtext text-xl md:text-3xl uppercase text-center  my-3'>MOMENTS CXPTURED AROUND THE WORLD</h1>
            </section>
            <section className='overflow-scroll flex'>
                <img src="https://images.unsplash.com/photo-1679800631624-7962f955eb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="1" />
                <img src="https://images.unsplash.com/photo-1681484518424-a7885c59f687?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="1" />
                <img src="https://images.unsplash.com/photo-1681327227285-b79ffebd387b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
                alt="1" />
                <img src="https://images.unsplash.com/photo-1681201118336-3ade4ae490c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                alt="1" />
                <img src="https://images.unsplash.com/photo-1680886300376-d511b4992efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                alt="1" />
                <img src="https://images.unsplash.com/photo-1680833910988-dc20bc1f8d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                alt="1" />
            </section>
            <p className="text-small text-center my-3 uppercase">CXPTURE / est. 2023</p>
        </section>
    </main>
  )
}

export default FeaturedWorks