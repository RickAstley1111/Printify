import React from 'react'
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import Products from '../../components/Products/Products'
import TeamSection from '../../components/OurTeam/TeamSection'
import FooterSection from '../../components/Footer/FooterSection'
import CTASection from '../../components/CTASection/CTASection'
import RevealOnScroll from '../../components/RevealOnScroll'

const MainPage = () => {
  return (
    <div>
      <div className='container'>
        <Header />
      </div>

      <div className='container'>
        <Hero />
      </div>

      <div className='container' id="services">
        <RevealOnScroll>
          <ServicesSection />
        </RevealOnScroll>
      </div>

      <div className='container'>
        <RevealOnScroll delay={80}>
          <Products />
        </RevealOnScroll>
      </div>

      <div className='container'>
        <RevealOnScroll delay={120}>
          <TeamSection />
        </RevealOnScroll>
      </div>

      <div className='container'>
        <RevealOnScroll>
          <CTASection />
        </RevealOnScroll>
      </div>

      <div className='container'>
        <RevealOnScroll>
          <FooterSection />
        </RevealOnScroll>
      </div>
    </div>
  )
}

export default MainPage
