import React from 'react'
import Footer from '~/components/Footer/Footer'
import { SiteHeader } from '~/components/Header/SiteHeader'
import NavBar from '~/components/NavBar/NavBar'
import { Profile } from '~/components/Profile/Profile'
// import { ProductList } from '~/components/Product/ProductList'
import Section from '~/components/Section/Section'

function ProfilePage() {
  return (
    <div>
      <NavBar/>
      <SiteHeader 
        head = "Profile" 
        image = "https://images.unsplash.com/photo-1627764574958-fb54cd7d7448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        />
      <Profile/>
      <Section />
      <Footer />
    </div>
  )
}

export default ProfilePage