import React from 'react'
import Navbar from '../components/Navbar'
import Curriculum from './Curriculum'
import Features from './Features'
import Testimonials from './Testimonials'
import Overview from './Overview'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Overview/>
      <Curriculum/>
      <Features/>
      <Testimonials/>
    </div>
  )
}

export default Home
