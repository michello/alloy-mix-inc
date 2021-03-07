import React from 'react'
import '../index.css';
import Card from '../components/Card';

/* project pictures for thumbnails */
import GatePicture from '../img/projects/gates/Gate_2/122570958_689470808661742_1983434360305736003_n.jpg';
import BathroomPicture from '../img/projects/bathroom/IMG_20190423_165008.jpg';


const Projects = () => (
  <div>
    <div className="hero">
      <h1>Projects</h1>
    </div>
    <div className="container lead">
      <div className="row alloy-card-row">
        <div className="col-md-4">
          <Card
            imageURL={GatePicture}
            altText="Gate Installation & Design"
            title="Gate Installation & Design"
            link="/projects/gate"/>
        </div>
        <div className="col-md-4">
          <Card
            imageURL={BathroomPicture}
            altText="Bathroom"
            title="Bathroom"
            link="/projects/bathroom"/>
        </div>
        <div className="col-md-4">
          <Card
            imageURL="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg"
            altText="Card image cap"
            title="Sample Card Title"
            text="He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid..."
            link="#"/>
        </div>
      </div>
      <div className="row alloy-card-row">
        <div className="col-md-4">
          <Card
            imageURL="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg"
            altText="Card image cap"
            title="Sample Card Title"
            text="He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid..."
            link="#"/>
        </div>
        <div className="col-md-4">
          <Card
            imageURL="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg"
            altText="Card image cap"
            title="Sample Card Title"
            text="He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid..."
            link="#"/>
        </div>
        <div className="col-md-4">
          <Card
            imageURL="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg"
            altText="Card image cap"
            title="Sample Card Title"
            text="He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid..."
            link="#"/>
        </div>
      </div>
      <div className="row alloy-card-row">
        <div className="col-md-4">
          <Card
            imageURL="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg"
            altText="Card image cap"
            title="Sample Card Title"
            text="He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid..."
            link="#"/>
        </div>
        <div className="col-md-4">
          <Card
            imageURL="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg"
            altText="Card image cap"
            title="Sample Card Title"
            text="He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid..."
            link="#"/>
        </div>
        <div className="col-md-4">
          <Card
            imageURL="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg"
            altText="Card image cap"
            title="Sample Card Title"
            text="He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid..."
            link="#"/>
        </div>
      </div>
      <div className="row alloy-card-row">
        <div className="col-md-4">
          <Card
            imageURL="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg"
            altText="Card image cap"
            title="Sample Card Title"
            text="He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid..."
            link="#"/>
        </div>
        <div className="col-md-4">
          <Card
            imageURL="https://www.traditionalbuilding.com/.image/t_share/MTUzMDcwMzY2MTQ5ODQ2NjQ4/tb-metalwork-400.jpg"
            altText="Card image cap"
            title="Sample Card Title"
            text="He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid..."
            link="#"/>
        </div>
      </div>
      
    </div>
  </div>
)

export default Projects;