import React from 'react'
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import Products from '../../components/Products/Products'
import TeamSection from '../../components/OurTeam/TeamSection'
import FooterSection from '../../components/Footer/FooterSection'
import CTASection from '../../components/CTASection/CTASection'

const MainPage = () => {
  return (
    <div>
      <div className='container'>
        <Header />
      </div>

      <div className='container'>
        <Hero />
      </div>

      <div className='container'>
        <ServicesSection />
      </div>

      <div className='container'>
        <Products />
      </div>

      <div className='container'>
        <TeamSection/>
      </div>

      <div className='container'>
        <CTASection/>
      </div>

      <div className='container'>
        <FooterSection/>
      </div>

    </div>
  )
}

export default MainPage