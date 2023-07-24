import React from 'react'
import { Filter } from '~/components/Filter/Filter'
import Footer from '~/components/Footer/Footer'
import { SiteHeader } from '~/components/Header/SiteHeader'
import NavBar from '~/components/NavBar/NavBar'
// import { ProductList } from '~/components/Product/ProductList'
import Section from '~/components/Section/Section'

function ListProductsPage() {
  return (
    <div>
      <NavBar/>
      <SiteHeader 
        head = "Cửa hàng" 
        image = "https://images.unsplash.com/photo-1627764574958-fb54cd7d7448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        />
      <Filter/>
      {/* <ProductList /> */}
      <Section />
      <Footer />
    </div>
  )
}

export default ListProductsPage