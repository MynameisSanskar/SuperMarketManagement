import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Carousel2 from '../components/Carousel2'
import Card from '../components/Card'
import Slider from '../components/Review'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Card IMG={'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'}/>
    <Carousel2/>
    <Slider/>

    <Footer/>
    </>
    
  )
}

export default HomePage