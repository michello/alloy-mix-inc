import React from 'react'

const Card = ({imageURL, altText, title, text, link}) => {
  return(
    <div className="card">
      <img className="card-img-top" src={imageURL} alt={altText}/>
      <div className="card-body">
        <h4 className="card-title">
          {title}
        </h4>
        <p className="card-text">
          {text}  
        </p>
        <a href={link} className="btn btn-primary">
          More &rarr;
        </a>
      </div>
    </div>  
  )
}

export default Card