import React from 'react'
import Footer from './Componets/Footer'
import Header from './Componets/Header'
import Hero from './Componets/Hero'
import FeaturesSection from './Componets/FeaturesSection'
import FewFeatures from './Componets/FewFeatures'
import PropertySection from './Componets/PropertySection'
import WhyChooseReerate from './Componets/WhyChooseReerate'
import Reviews from './Componets/Reviews'
import FAQ from './Componets/FAQ'
import ContactUs from './Componets/ContactUs'


const App = () => {
  return (
    
       <div className='bg-[#FFF0E9]'>
       
       <Header/>
       <Hero/>
       <FeaturesSection/>
       <FewFeatures/>
       <WhyChooseReerate/>
       <Reviews/>
       <FAQ/>
       <ContactUs/>
       <Footer/>
       
       
       </div>
     

  )
}

export default App
