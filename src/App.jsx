import React, { useState } from 'react'
import Layout from './Components/Layout'
import Hero from './Components/Hero'
import EmailForm from './Components/EmailForm'
import Tabs from './Components/Tabs'



export default function App() {
   
  

  return (
    <Layout>
      <Hero/>
      <Tabs />
      <EmailForm/>
    </Layout>
  )
}
