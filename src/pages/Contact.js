import React from 'react';
import Hero from "../components/Hero";

import ContactHeroImage from "../img/contact-us.jpg";

const Contact = () => {
  return(
    <>
        <Hero
            backgroundImageUrl={ContactHeroImage}
            title="Contact"
            headerStyle={{color: '#fff', borderLeft: 'none'}}
        />
        <div className="container lead">
            <div className="row alloy-row">
                <div className="col-md-4 alloy-content">
                    <h4 class="title" style={{color: '#212529'}}>
                        Stay Connected with Us!
                    </h4>
                    <div>
                        <ul>
                            <li>
                                Phone number: 917-803-9999
                            </li>
                            <li>
                                Email: alloymixinc@gmail.com
                            </li>
                            <li>
                                Address: 4401 1st Avenue Brooklyn, NY 11232
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8 alloy-content">
                    <h1 style={{borderLeft: 0,paddingLeft:0}}>
                        We'd love to hear from you!
                    </h1>
                    <h4 class="title" style={{color: '#212529'}}>
                        Feel free to fill out a form to get a quota of what you 
                    </h4>
                </div>
            </div>
        </div>
    </>
  )
}
export default Contact;