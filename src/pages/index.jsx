import AboutUs from '@/assets/components/homepage/AboutUs'
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
      </main>
    </>
  )
}

export default index