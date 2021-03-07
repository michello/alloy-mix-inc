import React from 'react'
import '../styles/Card.css'
import { Link } from "react-router-dom"

const Card = ({imageURL, altText, title, text, link}) => {
  return(
    <div className="card">
      <img className="card-img-top" src={imageURL} alt={altText}/>
      <div className="card-body">
        <h4 className="card-title card-item">
          {title}
        </h4>
        <p className="card-item">
          <Link exact to={link} className="btn btn-primary">
            More &rarr;
          </Link>
        </p>
      </div>
    </div>  
  )
}

export default Card