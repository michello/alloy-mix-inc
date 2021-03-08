import React from 'react';

import { Link } from "react-router-dom"

import ContructionPerson from '../img/construction-person.jpg';
import Construction from '../img/construction.jpg';
import Gate_1_Picture_1 from '../img/projects/gates/Gate_1/Gate_1_Picture_1.jpeg';
import Kitchen_2_Picture_1 from '../img/projects/kitchen/Fume Hood/Fume_Hood_2_Image_1.jpeg';
import ShelvesClosets_1_Picture_1 from '../img/projects/shelves_closets/ShelvesClosets_1_Image_1.jpeg';

import '../styles/Home.css';

const Home = () => {
  return(
    <>
      <div className="hero">
        <h1>Alloy Mix Inc<br/>
        <h4>
          General contractor, home improvement,<br/>
          remodeling contractor, house renovation contractor
        </h4>
        </h1>
      </div>
      <div className="container lead" style={{paddingBottom: 0}}>
        <div className="row alloy-row">
          <div className="col-md-6 alloy-content">
            <h1 className="title">
              Alloy
            </h1>
            <h2>
              /ˈaˌloi/
            </h2><br/>
            <p>
              Brass, bronze, and stainless steel. What do those have in common? They’re alloys, and they can be found everywhere, from your cars to homes to wrist watches. Just as how alloys are used for everything, Alloy Mix Inc. is <b className="highlight">the only solution</b> to your home improvement needs. 
            </p>
            <p>
              If you can dream up a better vision for your home, we can create it. We have completed various internal and external home remodeling and home renovation projects. We handle everything from bathroom and kitchen renovations to creating room dividers. We also restore flooring, railings, ceilings, fences, gates, and more. 
            </p>
            <img src={ContructionPerson} className="side-image alloy-card-image" alt="bottom image"/>
            
          </div>
          <div className="col-md-6">
            <img className="side-image-right" src={Construction} alt="side image"/>
            <p className="alloy-content">
              And a bit more about us: we are a general contractor company that has served the New York City area for more than a decade.
            </p>
            <p className="alloy-content">
              That’s <b className="highlight">over 10 years</b> of satisfied customer service! So you know you can count on us to help you maintain, repair, and restore your home.
              
            </p>
            <p className="emphasis">
              Trust in Alloy Mix Inc.
            </p>
          </div>
        </div>
      </div>

      <div className="container lead">
        <h1>
          Check out our recent projects.
        </h1>
        <span>
          <Link to="/projects" className="view-more-link">
            Click here to view more.
          </Link>
        </span>
        <div className="row">
          <div className="col-md-4">
            <div className="homepage card">
              <img className="card-img" src={Gate_1_Picture_1} alt="Gate Installation & Design"/>
              <div className="card-img-overlay">
                <h4 className="card-title">Gate Installation & Design</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="homepage card">
              <img className="card-img" src={Kitchen_2_Picture_1} alt="Card image cap"/>
              <div className="card-img-overlay">
                <h4 className="card-title">Kitchen - Fume Hood</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="homepage card">
              <img className="card-img" src={ShelvesClosets_1_Picture_1} alt="Shelves and Closets"/>
              <div className="card-img-overlay">
                <h4 className="card-title">Shelves and Closets</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;