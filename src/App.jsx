import React from 'react'
import Hero from './component/Hero'
import About from './component/About'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <main className= 'relative min-h-screen w-screen overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <section className='min-h-screen bg-blue-500 w-screen'/>
      
     <h1>hsdfsdfsd</h1>
      
    </main>
  )
}

export default App