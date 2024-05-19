import React from 'react'
import Slider from '../../components/slider/Slider'
import Swipper from '../../components/swipper/Swipper'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Menubanner from '../../components/menubanner/Menubanner'


const Home = () => {
  return (
    <>
       <Slider></Slider>
       <section style={{margin: "5rem"}}>
         <SectionTitle title1="From 10 am to 4 pm"
          title2="order online"></SectionTitle>
         <Swipper></Swipper>
       </section>
       <Menubanner menubannertitle="Menu Banner" menubannerdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"></Menubanner>
    </>
  )
}

export default Home
