import React from 'react'
 
import { Swiper, SwiperSlide } from 'swiper/react';

//swiper css
import 'swiper/css';
import 'swiper/css/pagination';

//custom css
import './swipper.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Swipper = () => {
    
  return (
      <Swiper 
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      >
          <SwiperSlide>
            <div className='swiperslide'>
               <Link>
               <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide2_t0f7wv.jpg" alt="pizza"/>
               </Link>
               <p>Pizza</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='swiperslide'>
               <Link>
               <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide4_bidpi8.jpg" alt="dessert"/>
               </Link>
               <p>Dessert</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='swiperslide'>
               <Link>
               <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide5_s4jwmv.jpg" alt="salad"/>
               </Link>
               <p>Salad</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='swiperslide'>
               <Link>
               <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide3_bfhrfm.jpg" alt="Soup"/>
               </Link>
               <p>Soup</p>
            </div>
          </SwiperSlide>
           
           
      </Swiper>
  )
}

export default Swipper
