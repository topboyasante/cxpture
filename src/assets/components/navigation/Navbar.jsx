import { CSSPlugin, gsap } from 'gsap'
import React, { useEffect, useState } from 'react'
import {CiMenuFries} from 'react-icons/ci'

function Navbar() {

  const [navIsOpen, setNavIsOpen] = useState(false)

  const tl = gsap.timeline()

  useEffect(()=>{
    gsap.registerPlugin(CSSPlugin)
  })

  function openNavbar(){

    tl.fromTo(".navLink-container",
      {
        clipPath:'circle(0.0%)'
      },
      {
        clipPath: "circle(100%)"
      }
    )

    tl.fromTo(".nav-title",
      {
        y:"-100vh"
      },
      {
        y:0,
        duration:0.8,
      }
    )
    tl.fromTo(".nav-item",
    {
      y:2000
    },
    {
      y:0,
      duration:1,
      stagger:0.2
    }

  )
    setNavIsOpen(true)
  }

  function closeNavbar(){
    tl.fromTo(".nav-item",
    {
      y:0
    },
    {
      y:2000,
      duration:1,
      stagger:0.2
    }
  )
    tl.fromTo(".nav-title",
      {
        y:0,
      },
      {
        y:"-100vh",
        duration:1,
      }
    )
    tl.fromTo(".navLink-container",
      {
        clipPath: "circle(100%)"
      },
      {
        clipPath:'circle(0%)'
      }
    )
    setNavIsOpen(false)
  }

  return (
    <>
      <nav className='w-full h-[10vh] fixed top-0 left-0 p-5 z-[50]'>
          <section className='max-w-[1600px] mx-auto flex justify-between items-center'>
              {/* Logo */}
              <section>
                <span className='text-3xl '>CXPTURE/</span>
              </section>
              {/* Sections */}
              <section>
                <CiMenuFries size={30} onClick={openNavbar}/>
              </section>
          </section>
      </nav>
      {
        <section className='fixed w-screen h-screen z-[60] bg-black navLink-container p-5 overflow-hidden top-0 left-0' onClick={closeNavbar}>
        <section className="flex justify-between items-center nav-title max-w-[1600px] mx-auto">
          <section>
              <span className='text-3xl text-white'>CXPTURE/</span>
          </section>
          <section>
              <CiMenuFries size={30} color='white' onClick={closeNavbar}/>
          </section>
        </section>
        {/* NavLinks */}
        <section className="flex flex-col h-[90vh] gap-5 justify-center items-center">
          <a className='text-3xl md:text-5xl text-white  tracking-widest' href="">
                <span className='relative block nav-item uppercase' data-text='About'>About/</span>
            </a>
            <a className='text-3xl md:text-5xl text-white  tracking-widest' href="">
                <span className='relative block nav-item uppercase' data-text='Works'>Works/</span>
            </a>
            <a className='text-3xl md:text-5xl text-white  tracking-widest' href="">
                <span className='relative block nav-item uppercase' data-text='Career'>Career/</span>
            </a>
            <a className='text-3xl md:text-5xl text-white  tracking-widest' href="">
                <span className='relative block nav-item uppercase' data-text='Blogs'>Blogs/</span>
            </a>
            <a className='text-3xl md:text-5xl text-white  tracking-widest' href="">
                <span className='relative block nav-item uppercase' data-text='Contact'>Contact/</span>
            </a>
        </section>
  </section>
      }
    </>
  )
}

export default Navbar