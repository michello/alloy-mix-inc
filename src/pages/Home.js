import React from 'react';
import construction from '../img/construction.jpg';
import { Link } from "react-router-dom"

export default () => (
  <>
  <div className="hero">
    <h1>Alloy Mix Inc</h1>
    <h4 className="align-left">Refurnishing Solutions for<br/>Your Everyday Needs</h4>
  </div>

  <div className="container lead">
    <div className="row alloy-row">
      <div className="col-md-4 alloy-content">
        <h1>Need a fix?</h1>
        <span></span>
        Count on us to help you complete or start your home refurnishing projects.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et odio id quam gravida sagittis. Curabitur bibendum tellus in ipsum congue, sit amet tempor tortor scelerisque. Nullam lacinia, libero fermentum blandit ultrices, ex eros tincidunt elit, venenatis molestie mi turpis eu nisi. Duis consequat pulvinar orci sed molestie. Ut non tincidunt diam. Curabitur molestie porta rutrum. Mauris et blandit purus. Praesent ac nisl ac ipsum sollicitudin porttitor id vitae nibh. Pellentesque dignissim vitae eros quis volutpat. Donec ultricies risus lectus. Suspendisse condimentum commodo turpis et pharetra. Aenean luctus diam erat, sit amet aliquet lacus sagittis sit amet. 
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