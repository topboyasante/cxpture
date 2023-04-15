import AboutUs from '@/assets/components/homepage/AboutUs'
import Contact from '@/assets/components/homepage/Contact'
import FeaturedWorks from '@/assets/components/homepage/FeaturedWorks'
import Hero from '@/assets/components/homepage/Hero'
import Head from 'next/head'
import React from 'react'

function index() {
  return (
    <>
       <Head>
        <title>CXPTURE</title>
        <meta name="title" content="CXPTURE | Photography" />
        <meta name="description" content="CXPTURE | Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="noise">
        <Hero/>
        <AboutUs/>
        <FeaturedWorks/>
        <Contact/>
      </main>
    </>
  )
}

export default index