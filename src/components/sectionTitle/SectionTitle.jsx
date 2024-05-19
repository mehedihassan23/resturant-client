import React from 'react'
import './sectiontitle.css'
const SectionTitle = ({title1, title2}) => {
  return (
    <div className='sectintitle'>
      <h1>--- {title1} ---</h1>
      <h2>--- {title2} ---</h2>
    </div>
  )
}

export default SectionTitle
