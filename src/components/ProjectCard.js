import React from 'react'
import '../styles/Card.css'

const Card = ({imageURL, altText, title, text, link}) => {
  return(
    <div className="card">
      <img className="card-img" src={imageURL} alt={altText}/>
    </div>  
  )
}

export default Card