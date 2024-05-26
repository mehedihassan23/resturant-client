import React from 'react'

import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import "./additem.css"

const Additem = () => {
  return (
    <div className='additem'>
        <SectionTitle title1="what's new?" title2="ADD AN ITEM"></SectionTitle>
        
        <div className="additemform">
            <form>
                <div className="inputdiv">
                    <label htmlFor="name" className='label'>recipe name*</label>
                    <input type="text"  className='singleInput' />
                </div>
               
                <div className="joinInput" style={{display: "flex"}}>
                    <div className="inputdiv">
                        <label htmlFor="category" className='label'>category*</label>
                        <input type="text" />
                    </div>
                    <div className="inputdiv">
                        <label htmlFor="category" className='label'>price*</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="inputdiv">
                    <label htmlFor="details" className='label'>recipe details*</label>
                    <textarea name="details" id=""></textarea>
                </div>
                  <input type="file" name="file" /> <br />
                  <button className='additembutton'>Add Item </button>
            </form>
        </div>
        
    </div>
  )
}

export default Additem
