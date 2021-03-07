import React from 'react'
import './Footer.css'

const Footer = () => {
  return(
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>Alloy Mix Inc</h1>
          </div>
          <div className="col-md-4">
            <p>
              4401 1st Avenue<br/>
              Brooklyn, NY 11232
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Email: alloymixinc@gmail.com<br/>
              Phone: 917-803-9999<br/>
              Fax: 718-236-7008
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer