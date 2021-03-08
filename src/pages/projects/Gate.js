import React from 'react';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';
import { Breadcrumb, BreadcrumbItem, timeoutsShape } from "shards-react";

import '../../styles/Project.css';

/* pictures of projects*/
import Gate_1_Picture_1 from '../../img/projects/gates/Gate_1/Gate_1_Picture_1.jpeg';
import Gate_1_Picture_2 from '../../img/projects/gates/Gate_1/Gate_1_Picture_2.jpeg';
import Gate_1_Picture_3 from '../../img/projects/gates/Gate_1/Gate_1_Picture_3.jpeg';
import Gate_2_Picture_1 from '../../img/projects/gates/Gate_2/Gate_2_Picture_1.jpeg';

import ProjectImage from "../../img/project.jpg"

const GateProject = () => {
    return(
        <>
            <Hero
                page="project"
                title="Gate Installation and Design"
                backgroundImageUrl={ProjectImage}
                headerStyle={{backgroundColor: '#fff'}}
            />
            <div className="container lead">
                <div className="row alloy-card-row">
                    <div className="col-md-4">
                        <ProjectCard
                            imageURL={Gate_1_Picture_1}
                            altText="Gate Installation & Design"
                            title="Gate Installation & Design"
                            link="/projects/gate"
                        />
                    </div>
                    <div className="col-md-8">
                        <h2>02/15/2020</h2>
                        <div className="row">
                            <div className="col-4">
                                <img src={Gate_1_Picture_2} className="alloy-card-image"/>
                            </div>
                            <div className="col-4">
                                <img src={Gate_1_Picture_3} className="alloy-card-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container lead">
                <div className="row alloy-card-row">
                    <div className="col-md-4">
                        <ProjectCard
                            imageURL={Gate_2_Picture_1}
                            altText="Gate Installation & Design"
                            title="Gate Installation & Design"
                            link="/projects/gate"
                        />
                    </div>
                    <div className="col-md-8">
                        <h2>02/23/2020</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GateProject;