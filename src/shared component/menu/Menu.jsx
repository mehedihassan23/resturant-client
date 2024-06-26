import React from 'react'

import "./menu.css"
import useMenuData from '../../hooks/useMenuData';


const Menu = ({Menucategory}) => {

   const [menuData, loading] = useMenuData()
   console.log("From Menu", typeof Menucategory)

   return (
      <>
      <section className='menu'>
         {loading && <p style={{fontSize: "1.5rem"}}>loading...</p>}
       
          {
            menuData.filter((menu) => menu.category === Menucategory).map(menudata => {
               const {_id, name, image, recipe,  price} = menudata;
            
               return <div className='menuitem' key={_id}>
                  <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide2_t0f7wv.jpg" alt="menu item" />
                  <div style={{margin: "0 1rem"}}>
                     <p className="itemname">{name}</p>
                     <p className="itemdetails">{recipe}</p>
                  </div>
                  <p className='price'>${price}</p>
               </div>
            })
          }
          
      </section>
      <button className='menuButton'>View Our full item</button>
      </>
   )
  
}

export default Menu
