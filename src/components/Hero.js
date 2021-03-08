import React from 'react'
import ProjectImage from "../img/project.jpg"

const Hero = ({backgroundImageUrl, title, subtitle1="", subtitle2="", headerStyle={}}) => {
  // const backgroundImage = backgroundImageUrl ? backgroundImageUrl : {ProjectImage

  const style = {
    width: "100vw",
    height: "60vh",

    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: '50%'
  }

  return(
    <div style={ style }>
      <div>
      <h1 style={headerStyle}>{title}</h1>
      <p>
      {subtitle1 && (
        <h4>
          {subtitle1}
          {subtitle2 &&(<><br/>{subtitle2}</>)}
        </h4>
      )}
      </p>
      </div>
    </div>
  )
}

export default Hero;