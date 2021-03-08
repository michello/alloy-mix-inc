import React from 'react';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';

import '../../styles/Project.css';

/* pictures of projects*/
import Bathroom_1_Picture_1 from '../../img/projects/bathroom/Bathroom_1_Picture_1.jpeg';
import Bathroom_1_Picture_2 from '../../img/projects/bathroom/Bathroom_1_Picture_2.jpeg';
import Bathroom_1_Picture_3 from '../../img/projects/bathroom/Bathroom_1_Picture_3.jpeg';
import Bathroom_1_Picture_4 from '../../img/projects/bathroom/Bathroom_1_Picture_4.jpeg';

import ProjectImage from "../../img/project.jpg"

const BathroomProject = () => {
    return(
        <>
            <Hero
                page="project"
                title="Bathroom"
                backgroundImageUrl={ProjectImage}
                headerStyle={{backgroundColor: '#fff'}}
            />
            <div className="container lead">
                <div className="row alloy-card-row">
                    <div className="col-md-4">
                        <ProjectCard
                            imageURL={Bathroom_1_Picture_1}
                            altText="Bathroom"
                            title="Bathroom"
                            link="/projects/bathroom"
                        />
                    </div>
                    <div className="col-md-8">
                        <h2>04/23/2019</h2>
                        <div className="row">
                            <div className="col-4">
                                <img src={Bathroom_1_Picture_2} className="alloy-card-image"/>
                            </div>
                            <div className="col-4">
                                <img src={Bathroom_1_Picture_3} className="alloy-card-image"/>
                            </div>
                            <div className="col-4">
                                <img src={Bathroom_1_Picture_4} className="alloy-card-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BathroomProject;