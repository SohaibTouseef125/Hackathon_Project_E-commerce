import AddressSection from '@/components/contact/AddressSection'
import ContactForm from '@/components/contact/ContactForm'
import ContactHeroSection from '@/components/contact/ContactHeroSection'
import FeaturesShop from '@/components/shop/FeaturesShop'
import React from 'react'

const Contact = () => {
  return (
    <div>
      
     
      <ContactHeroSection/>
      <main className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <AddressSection />
        <ContactForm />
      </main>
     <FeaturesShop />
     
    </div>
  )
}

export default Contact