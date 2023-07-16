import React from 'react'
import Footer from '~/components/Footer/Footer'
import { SiteHeader } from '~/components/Header/SiteHeader'
import NavBar from '~/components/NavBar/NavBar'
import Login from "~/components/Form/Login"
import Register from "~/components/Form/Register"
import Banner from "~/components/Banner/Banner"
function AuthenticPage() {
  return (
    <div>
      <NavBar/>
      <SiteHeader 
        head = "Tài Khoản" 
        image = "https://images.unsplash.com/photo-1600429991827-5224817554f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="container  mx-auto p-5 ">
      <div className="lg:max-w flex gap flex-wrap sm:flex-nowrap  justify-center">
          <Login />
          <Register />
        </div>
      </div>
        <Banner/>
      <Footer />
    </div>
  )
}

export default AuthenticPage