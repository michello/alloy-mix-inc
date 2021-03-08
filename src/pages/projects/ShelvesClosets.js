import React from 'react';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';
import { Breadcrumb, BreadcrumbItem, timeoutsShape } from "shards-react";

import '../../styles/Project.css';

/* pictures of projects*/
import ShelvesClosets_1_Picture_1 from '../../img/projects/shelves_closets/IMG_20190107_145728-min.jpg';
import ShelvesClosets_1_Picture_2 from '../../img/projects/shelves_closets/IMG_20181220_083807-min.jpg';
import ShelvesClosets_1_Picture_3 from '../../img/projects/shelves_closets/IMG_20181218_132611-min.jpg';

const ShelvesClosetsProject = () => {
    return(
        <>
            <Hero page="project"
                title="Shelves and Closets"
                headerStyle={{backgroundColor: '#fff'}}
            />
            <div className="container lead">
                <div className="row alloy-card-row">
                    <div className="col-md-4">
                        <ProjectCard
                            imageURL={ShelvesClosets_1_Picture_1}
                            altText="Shelves and Closets"
                            title="Shelves and Closets"
                            link="/projects/shelves-and-closets"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="row mb-4">
                            <div className="col-4">
                                <img src={ShelvesClosets_1_Picture_2} className="alloy-card-image"/>
                            </div>
                            <div className="col-4">
                                <img src={ShelvesClosets_1_Picture_3} className="alloy-card-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShelvesClosetsProject;