import React from 'react'
import Slider from '../../components/slider/Slider'
import Swipper from '../../components/swipper/Swipper'
import SectionTitle from '../../components/sectionTitle/SectionTitle'


const Home = () => {
  return (
    <>
       <Slider></Slider>
       <section style={{margin: "5rem"}}>
         <SectionTitle title1="From 10 am to 4 pm" title2="order online"></SectionTitle>
         <Swipper></Swipper>
       </section>
    </>
  )
}

export default Home
