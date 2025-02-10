import AccountHeroSection from '@/components/account/AccountHeroSection'
import LoginForm from '@/components/account/LoginForm'
import FeaturesShop from '@/components/shop/FeaturesShop'
import React from 'react'

const Login = () => {
  return (
   <>
    <AccountHeroSection />
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LoginForm />
      </div>
    </main>
    <FeaturesShop />
   </>
  )
}

export default Login