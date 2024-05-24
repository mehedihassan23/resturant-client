import React from 'react'
import Slider from '../../components/slider/Slider'
import Swipper from '../../components/swipper/Swipper'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Menubanner from '../../shared component/menubanner/Menubanner'
import Menu from '../../shared component/menu/Menu'
import CallUs from '../../components/callus/CallUs'
import Menucard from '../../components/menucard/Menucard'
import Featured from '../../components/featured/Featured'
import Testimonials from '../../components/testimonials/Testimonials'


const Home = () => {
  return (
    <>
       <Slider></Slider>
       <section style={{margin: "5rem"}}>
         <SectionTitle title1="From 10 am to 4 pm"
          title2="order online">
          </SectionTitle>
         <Swipper></Swipper>  
       </section>

       <Menubanner menubannertitle="Menu Banner" menubannerdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"></Menubanner>
       
       <SectionTitle title1="check it out" title2="from our menu"></SectionTitle>
       <Menu Menucategory="popular"></Menu>

       <CallUs></CallUs>
       <Menucard></Menucard>

       <Featured></Featured>
       <Testimonials></Testimonials>
    </>
  )
}

export default Home
