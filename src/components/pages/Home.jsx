import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import Banner from '../organisms/Banner'
import About from '../organisms/About'
import Pricing from '../organisms/Pricing'
import Contact from '../organisms/Contact'

const Home = () => {
  return (
    <MainTemplate>
      <Banner />
      <About />
      <Pricing />
      <Contact />
    </MainTemplate>
  )
}

export default Home