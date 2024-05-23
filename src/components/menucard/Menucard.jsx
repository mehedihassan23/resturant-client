import React from 'react'
import useMenuData from '../../hooks/useMenuData'

import "./menucard.css"
import SectionTitle from '../sectionTitle/SectionTitle';




const Menucard = () => {
    const [menuData, loading] = useMenuData();
    const salad = menuData.filter((menu) => menu.category === "salad")
    
  return (
     <>
     <SectionTitle title1="Should Try" title2="Chef recommend"></SectionTitle>
     <section className='menuCard'>
         {loading && <p style={{fontSize: "1.5rem"}}>loading...</p>}
        {salad.map(item => {
            const {_id, name, image, recipe,  price} = item;
            return  <div className='menucards' key={_id}>
                <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide1_riqjd7.jpg" alt="" />
                <div>
                    <p className="name">{name}</p>
                    <p className="recipe">{recipe}</p>
                    <button>Add To Cart</button>
                </div>
            </div>
        })}
     </section>
     </>
  )
}

export default Menucard
