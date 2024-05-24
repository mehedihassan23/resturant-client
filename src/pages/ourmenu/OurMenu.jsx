import React from 'react'
import Menubanner from '../../shared component/menubanner/Menubanner'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import Menu from '../../shared component/menu/Menu'

const OurMenu = () => {
  return (
     <section className='ourmenu'>
        <Menubanner menubannertitle="Our Menu" menubannerdescription="Would you like to try a dish?"></Menubanner>
        <SectionTitle title1="Don't miss" title2="Today's Offer"></SectionTitle>
        <Menu Menucategory="offered"></Menu>
        
        <Menubanner menubannertitle="dessert" menubannerdescription="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Menubanner>
        <Menu Menucategory="dessert"></Menu>

        <Menubanner menubannertitle="pizza" menubannerdescription="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Menubanner>
        <Menu Menucategory="pizza"></Menu>

        <Menubanner menubannertitle="salad" menubannerdescription="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Menubanner>
        <Menu Menucategory="salad"></Menu>

        <Menubanner menubannertitle="soup" menubannerdescription="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Menubanner>
        <Menu Menucategory="soup"></Menu>

     </section>
  )
}

export default OurMenu
