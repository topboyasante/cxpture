import React, { useEffect } from 'react'
import { gsap,Power1 } from 'gsap'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Contact() {
    useEffect(()=>{
        const tl = gsap.timeline(
            {
                scrollTrigger:{
                    trigger:".contact-container",
                    scrub:0.6,
                    start:"top 80%",
                    end:"bottom 100%",
                }
            }
        )

        tl.fromTo(".contact-container",
            
        {
            x:"200vw"
        },
        {
            x:0, 
            duration:2
        }
        )
    })

  return (
    <main className='my-5'>
        <section className='max-w-[1600px] mx-auto overflow-hidden'>
                <section className="contact-container lg:h-[500px] bg-black text-white flex flex-col justify-around items-center p-8">
                    <h1 className='featured-work-text text-3xl lg:w-[70%]'>Ready for your close-up? Let us help you capture your best angle! Our team of talented photographers is 
                    available to bring your vision to life.
                    Contact us today to schedule your session and let's make some magic together!
                    </h1>
                    <br />
                    <section className='lg:w-[70%]'>
                       <div className="flex justify-between items-center p-3">
                            <input type="email" name="email" id="email" placeholder='Your Email?'
                                className='outline-0 appearance-none border-0 w-full text-white bg-transparent text-2xl'
                            />
                            <AiOutlineArrowRight size={30}/>
                       </div>
                        <div className="bg-white w-full h-[2px] mt-5"></div>
                    </section>
                </section>
        </section>
    </main>
  )
}

export default Contact