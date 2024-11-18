import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprate from './LocationSprate'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <LocationSprate/>
      <AboutUs/>
      <AppSection/>
      <Sponsor/>
      <Footer/>
    </div>
  )
}

export default Home
