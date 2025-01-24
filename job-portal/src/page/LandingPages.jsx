import React from 'react'
import HomePage from './LandingPage/HomePage'
import WhoWeAre from './LandingPage/WhoWeAre'
import ShipManagementSection from './LandingPage/ShipManagementSection'
import CareerSection from './LandingPage/CareerSection'
import NewsSection from './LandingPage/NewsSection'
import Footer from './LandingPage/Footer'

const LandingPages = () => {
  return (
    <div>
      <HomePage />
      <WhoWeAre />
      <ShipManagementSection />
      <CareerSection />
      <NewsSection />
      <Footer />
    </div>
  )
}

export default LandingPages
