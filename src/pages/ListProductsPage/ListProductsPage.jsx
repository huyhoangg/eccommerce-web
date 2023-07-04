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
      <SiteHeader />
      <Filter/>
      {/* <ProductList /> */}
      <Section />
      <Footer />
    </div>
  )
}

export default ListProductsPage