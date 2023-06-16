import React from 'react'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'



function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main> 
      <Footer />

    </>
  )
}

export default Layout
