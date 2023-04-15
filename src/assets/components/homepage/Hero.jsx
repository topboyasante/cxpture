import React from 'react'

function Hero() {
  return (
    <main className='pt-[10vh]'>
        <section className='max-w-[1600px] lg:h-[100vh] mx-auto px-5'>
            <section className='mb-3'>
                <h1 className='text-3xl md:text-5xl lg:text-7xl uppercase'>//Capturing Your Best Experiences</h1>
            </section>
            <section className=''>
                {/* Smaller Image */}
                <section className='w-full overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1490093158370-1a6be674437b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80" 
                    alt="main-img" className='w-full md:h-[500px]' />
                </section>
               <section className='flex items-center gap-5'>
                    <p className='w-full lg:w-[50%] my-5 lg:text-lg xl:text-2xl'>
                        Introducing CXPTURE - where creativity meets perfection! Our team of passionate photographers is dedicated to capturing life's unforgettable moments with a 
                        unique twist. With state-of-the-art equipment and a focus on quality and attention to detail, we specialize in providing personalized experiences for weddings, 
                        portraits, events, and commercial photography.Let us turn your vision into a reality and immortalize your precious moments in style. 
                        Choose CXPTURE and make your memories truly unforgettable!
                    </p>
                    <img src="https://images.unsplash.com/photo-1559213146-1074834a13fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1629&q=80" 
                    alt="side-img" className='hidden lg:block w-[50%] h-[300px]' />
               </section>
            </section>
        </section>
    </main>
  )
}

export default Hero