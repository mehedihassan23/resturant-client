import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import "./testimonials.css"
import SectionTitle from '../sectionTitle/SectionTitle';

const Testimonials = () => {
       const [reviews, setReviews] = useState([])


        useEffect(()=>{
            fetch("reviews.json")
            .then(res => res.json())
            .then(reviewsData => {
              setReviews(reviewsData)
              console.log('User Data:', reviewsData);
            })
        },[])


  return (
      <>
      <SectionTitle title1="what our client say" title2="testimonials"></SectionTitle>

         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
          reviews.map(review => {
            const {_id, name, details, rating} = review
            return <SwiperSlide>
              <div className='slide'>
                 <p className="sliderating">
                  <Rating style={{maxWidth: 250}} value={rating}></Rating>
                 </p>
                  <img width="30rem" src="https://res.cloudinary.com/doolocyaf/image/upload/v1716533941/Resturant%20Project/quote-left_1_pibuhf.png" alt="" />
                 <p className='slidedetails'>{details}</p>
                 <p className='slidename'>{name}</p>
              </div>
            </SwiperSlide>
          })
        }
        
     </Swiper>
      </>
  )
}

export default Testimonials
