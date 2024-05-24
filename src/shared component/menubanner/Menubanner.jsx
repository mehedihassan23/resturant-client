import React from 'react'
import "./menubanner.css"

const Menubanner = ({menubannertitle, menubannerdescription}) => {
  return (
     <section className='menubanner'>
        <div className="menubannerdetails">
        <h3 className='menubannertitle'>{menubannertitle}</h3>
        <p className="menubannerdescription">
                {menubannerdescription}
        </p>
        </div>
     </section>
  )
}

export default Menubanner
