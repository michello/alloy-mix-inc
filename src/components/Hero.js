import React from 'react'
import project from '../img/project.jpg'; 

const Hero = ({page, title, headerStyle={}}) => {
  const style = {
    width: "100vw",
    height: "60vh",

    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    backgroundImage: `url(${project})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }

  return(
    <div style={ style }>
      <h1 style={headerStyle}>{title}</h1>
    </div>
  )
}

export default Hero;