import RegistrationForm from '@/auth/register/RegistrationForm'
import React from 'react'

export default function Registration() {
  return (
    <section className="relative pt-6 px-4 lg:px-6 pb-20 md:pb-32 overflow-hidden ">
      <div className="relative max-w-7xl pt-12 sm:pt-28 mx-auto ">
        <img className="absolute top-0 left-0 object-contain" src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/sign-up/background-gradient-color.png" alt="" />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-lg md:max-w-xl py-14 px-6 xs:px-12 lg:px-16 mx-auto bg-white rounded-4xl shadow-xl">
            <h3 className="font-heading text-4xl text-gray-900 font-semibold mb-4">Sign up to your account</h3>
            <p className="text-lg text-gray-500 mb-10">Greetings on your return! We kindly request you to enter your details.</p>
            <RegistrationForm/>
          </div>
        </div>
      </div>
    </section>
  )
}
