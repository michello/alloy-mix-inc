import React from 'react';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';
import { Breadcrumb, BreadcrumbItem, timeoutsShape } from "shards-react";

import '../../styles/Project.css';

/* pictures of projects*/
import Landscaping_1_Picture_1 from '../../img/projects/landscaping/Landscaping_1_Image_1.jpeg';
import Landscaping_1_Picture_2 from '../../img/projects/landscaping/Landscaping_1_Image_2.jpeg';

const LandscapingProject = () => {
    return(
        <>
            <Hero page="project"
                title="Landscaping"
                headerStyle={{backgroundColor: '#fff'}}
            />
            <div className="container lead">
                <div className="row alloy-card-row">
                    <div className="col-md-6">
                        <h2>before</h2>
                        <img src={Landscaping_1_Picture_2} className="alloy-card-image"/>
                    </div>
                    <div className="col-md-6">
                        <h2>after</h2>
                        <img src={Landscaping_1_Picture_1} className="alloy-card-image"/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default LandscapingProject;