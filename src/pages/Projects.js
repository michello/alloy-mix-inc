import React from 'react'
import '../index.css';
import Card from '../components/Card';
import Hero from "../components/Hero";

/* project pictures for thumbnails */
import GatePicture from '../img/projects/gates/Gate_2/Gate_2_Picture_1.jpeg';
import BathroomPicture from '../img/projects/bathroom/Bathroom_1_Picture_4.jpeg';
import FlooringPicture from '../img/projects/flooring/flooring_1/Flooring_1_Image_1.jpeg';
import KitchenPicture from '../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_1.jpeg';
import LandscapingPicture from '../img/projects/landscaping/Landscaping_1_Image_1.jpeg';
import ShelvesClosetsPicture from '../img/projects/shelves_closets/ShelvesClosets_1_Image_1.jpeg'

import HeroPicture from '../img/hero.jpg'

const Projects = () => (
  <div>
    <Hero
      backgroundImageUrl={HeroPicture}
      title="Projects"
      headerStyle={{color: '#fff',paddingLeft:'0',borderLeft:'none'}}
    />
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
            imageURL={FlooringPicture}
            altText="Flooring"
            title="Flooring"
            link="/projects/flooring"/>
        </div>
      </div>
      <div className="row alloy-card-row">
        <div className="col-md-4">
          <Card
            imageURL={KitchenPicture}
            altText="Kitchen"
            title="Kitchen"
            link="/projects/kitchen"/>
        </div>
        <div className="col-md-4">
        <Card
            imageURL={LandscapingPicture}
            altText="Landscaping"
            title="Landscaping"
            link="/projects/landscaping"/>
        </div>
        <div className="col-md-4">
          <Card
            imageURL={ShelvesClosetsPicture}
            altText="Shelves and Closests"
            title="Shelves and Closests"
            link="/projects/shelves-and-closets"/>
        </div>
      </div>
    </div>
  </div>
)

export default Projects;