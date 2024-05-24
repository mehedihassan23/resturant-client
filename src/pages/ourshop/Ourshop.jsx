import React, { useState } from 'react'
import Menubanner from '../../shared component/menubanner/Menubanner'
import "./ourshop.css"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenuData from '../../hooks/useMenuData';
import PageTitle from '../../components/pagetitle/PageTitle';

const Ourshop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menuData, loading] = useMenuData();
    
    const salad = menuData.filter((data)=> data.category === "salad")
    const pizza = menuData.filter((data)=> data.category === "pizza")
    const soup = menuData.filter((data)=> data.category === "soup")
    const dessert = menuData.filter((data)=> data.category === "dessert")
    const drinks = menuData.filter((data)=> data.category === "drinks")
  return (
    <div>
     <PageTitle pagetitle="Resturant । Our Shop" pageicon="https://res.cloudinary.com/doolocyaf/image/upload/v1716612538/Resturant%20Project/cart_bsinws.png"></PageTitle>
      <Menubanner menubannertitle="Our Shop" menubannerdescription="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"></Menubanner>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
            <Tab>dessert</Tab>
            <Tab>drinks</Tab>
        </TabList>
        <TabPanel className="panel">
             {loading && <p style={{fontSize: "1.5rem", textAlign: "center"}}>loading...</p>}
             {salad.map((salad) => {
                const {_id,name,recipe,image,category,price} = salad;
                return <div className='shopcard'>
                     <img width={300} height={300} src='https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide2_t0f7wv.jpg' alt='salad' />
                    <p className='shopcardname'> {name}</p>
                    <p className='recipe'>{recipe}</p>
                    <button className='shopcardbutton'>add to cart</button>
                </div>
             })
             }
        </TabPanel>

        <TabPanel className="panel">
             {loading && <p style={{fontSize: "1.5rem", textAlign: "center"}}>loading...</p>}
             {pizza.map((salad) => {
                const {_id,name,recipe,image,category,price} = salad;
                return <div className='shopcard'>
                     <img width={300} height={300} src='https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide2_t0f7wv.jpg' alt='salad' />
                    <p className='shopcardname'> {name}</p>
                    <p className='recipe'>{recipe}</p>
                    <button className='shopcardbutton'>add to cart</button>
                </div>
             }) 
             }
        </TabPanel>

        <TabPanel className="panel">
             {loading && <p style={{fontSize: "1.5rem", textAlign: "center"}}>loading...</p>}
             {soup.map((salad) => {
                const {_id,name,recipe,image,category,price} = salad;
                return <div className='shopcard'>
                     <img width={300} height={300} src='https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide2_t0f7wv.jpg' alt='salad' />
                    <p className='shopcardname'> {name}</p>
                    <p className='recipe'>{recipe}</p>
                    <button className='shopcardbutton'>add to cart</button>
                </div>
             }) 
             }
        </TabPanel>

        <TabPanel className="panel">
             {loading && <p style={{fontSize: "1.5rem", textAlign: "center"}}>loading...</p>}
             {dessert.map((salad) => {
                const {_id,name,recipe,image,category,price} = salad;
                return <div className='shopcard'>
                     <img width={300} height={300} src='https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide2_t0f7wv.jpg' alt='salad' />
                    <p className='shopcardname'> {name}</p>
                    <p className='recipe'>{recipe}</p>
                    <button className='shopcardbutton'>add to cart</button>
                </div>
             }) 
             }
        </TabPanel>

        <TabPanel className="panel">
             {loading && <p style={{fontSize: "1.5rem", textAlign: "center"}}>loading...</p>}
             {drinks.map((salad) => {
                const {_id,name,recipe,image,category,price} = salad;
                return <div className='shopcard'>
                     <img width={300} height={300} src='https://res.cloudinary.com/doolocyaf/image/upload/v1716192756/Resturant%20Project/slide2_t0f7wv.jpg' alt='salad' />
                    <p className='shopcardname'> {name}</p>
                    <p className='recipe'>{recipe}</p>
                    <button className='shopcardbutton'>add to cart</button>
                </div>
             }) 
             }
        </TabPanel>
         
      </Tabs>
    </div>
  )
}

export default Ourshop
