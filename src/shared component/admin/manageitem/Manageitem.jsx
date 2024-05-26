import React from 'react'

import "./manageitem.css"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"


const Manageitem = () => {
  return (
    <div className='manageitem'>
       <SectionTitle title1="hurry up" title2="manage all items"></SectionTitle>
       <div className="allitem">
         <h3>Total items: 6</h3>
         <table>
  <tr>
    <th>item image</th>
    <th>name</th>
    <th>price</th>
    <th>action</th>
  
  </tr>
  <tr>
    <td> <span>1</span> Image</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
   
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>

  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>

   
   
</table>
       </div>
    </div>
  )
}

export default Manageitem
