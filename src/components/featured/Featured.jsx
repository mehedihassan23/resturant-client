import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'

import "./featured.css"

const Featured = () => {
  return (
    <div className='featuredSection'>
       <SectionTitle title1="Check Featured" title2="Deal Featured">
       </SectionTitle>
       <div className="feature">
         <div className='image'>
         <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide1_riqjd7.jpg" alt="feature image"/>
         </div>
         <div className='detailsSection'>
            <p className="date">20 Mach 2024</p>
            <p className="question">Where I can get more?</p>
            <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum, nam odit dolores soluta quis dolor hic dicta at obcaecati?</p>
            <button>Read more</button>
         </div>
       </div>
    </div>
  )
}

export default Featured
