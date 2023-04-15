import React from 'react'
import Navbar from '../components/navigation/Navbar'

function Layout({children}) {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default Layout