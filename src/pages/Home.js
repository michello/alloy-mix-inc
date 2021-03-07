import React from 'react';
import construction from '../img/construction.jpg';
import { Link } from "react-router-dom"

export default () => (
  <>
  <div className="hero">
    <h1>Alloy Mix Inc<br/>
    <h4>
      General contractor, home improvement,<br/>
      remodeling contractor, house renovation contractor
    </h4>
    </h1>
  </div>

  <div className="container lead">
    <div className="row alloy-row">
      <div className="col-md-4 alloy-content">
        <h1>
          Alloy
        </h1>
        <span>
          /ˈaˌloi/
        </span>
        <p>
          Brass, bronze, and stainless steel. What do those have in common? They’re alloys, and they can be found everywhere, from your cars to homes to wrist watches. Just as how alloys are used for everything, Alloy Mix Inc. is the only solution to your home improvement needs. 
        </p>
        <p>
          If you can dream up a better vision for your home, we can create it. We have completed various internal and external home remodeling and home renovation projects. We handle everything from bathroom and kitchen renovations to creating room dividers. We also restore flooring, railings, ceilings, fences, gates, and more. 
        </p>
        <p>
          And a bit more about us: we are a general contractor company that has served the New York City area for more than a decade. That’s over 10 years of satisfied customer service. So you know you can count on us to help you maintain, repair, and restore your home. Trust in Alloy Mix Inc.
        </p>
      </div>
      <div className="col-md-6">
        <img className="side-image" src={construction} alt="side image"/>
        <img className="side-image-two" src={construction} alt="side image"/>
        <img className="side-image-three" src={construction} alt="side image"/>
      </div>
    </div>
  </div>

  <div className="container lead">
    <h1>
      Check out our recent projects.
    </h1>
    <span>
      <Link to="/projects" className="nav-link">
        Click here to view more.
      </Link>
    </span>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg" alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">Sample Card Title</h4>
            <p className="card-text">He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
            <a href="#" className="btn btn-primary">Tell me more &rarr;</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg" alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">Sample Card Title</h4>
            <p className="card-text">He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
            <a href="#" className="btn btn-primary">Tell me more &rarr;</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg" alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">Sample Card Title</h4>
            <p className="card-text">He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
            <a href="#" className="btn btn-primary">Tell me more &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
)