import React from 'react'

import Menubanner from '../../shared component/menubanner/Menubanner'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import './contact.css'

const Contact = () => {
  return (
     <>
      <Menubanner menubannertitle="CONTACT US" menubannerdescription="WOULD YOU LIKE TO TRY A DISH?"></Menubanner>
      <SectionTitle title1="visit us" title2="OUR LOCATION"></SectionTitle>
     
      <div className="contactsection">    
          <ul>
            <li><FaPhoneAlt /></li>
            <li>Phone</li>
            <li><a href="tel: +123456789">+123456789</a></li>
          </ul>
     
         <ul>
            <li><FaLocationDot /></li>
            <li>location</li>
            <li>123/ABC STREET, UNITED STATES</li>
          </ul>

          <ul>
            <li><FaRegClock /></li>
            <li>working hours</li>
            <li>Saturday-Wednesday: 10.00AM - 4.00PM</li>
          </ul>

      </div>

      <SectionTitle title1="send us a message" title2="CONTACT FORM">
      </SectionTitle>

      <div className="contactforms">
        <form>
            <div className='namemailbox'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter your name'/>
                </div>
                <div>
                    <label htmlFor="email">Email*</label>
                    <input type="email" name='email' placeholder='Enter your email' />
                </div>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type='text' name='phone' placeholder='Enter your phone number' />
            </div>
            <div>
                <textarea name="message" placeholder='Write your message'></textarea>
            </div>
            <button>send message
                 <img width={25} src="https://res.cloudinary.com/doolocyaf/image/upload/v1716661514/Resturant%20Project/telegram_n3rg9r.png"/>
            </button>
        </form>
      </div>

     </>
  )
}

export default Contact
