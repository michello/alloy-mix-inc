import React from 'react';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';

import '../../styles/Project.css';

/* pictures of projects*/
/* project 1 */
import Flooring_1_Picture_1 from '../../img/projects/flooring/flooring_1/IMG_20181107_154323.jpg';
import Flooring_1_Picture_2 from '../../img/projects/flooring/flooring_1/IMG_20181107_154927.jpg';
import Flooring_1_Picture_3 from '../../img/projects/flooring/flooring_1/IMG_20181105_165519.jpg'
/* project 2 */
import Flooring_2_Picture_1 from '../../img/projects/flooring/flooring_2/IMG_20190419_120756.jpg';
import Flooring_2_Picture_2 from '../../img/projects/flooring/flooring_2/IMG_20190419_164219.jpg';

const BathroomProject = () => {
    return(
        <>
            <Hero
                page="project"
                title="Flooring"
                headerStyle={{backgroundColor: '#fff'}}
            />
            <div className="container lead">
                <div className="row alloy-card-row">
                    <div className="col-md-4">
                        <ProjectCard
                            imageURL={Flooring_1_Picture_1}
                            altText="Flooring"
                            title="Flooring"
                            link="/projects/flooring"
                        />
                    </div>
                    <div className="col-md-8">
                        <h2>04/23/2019</h2>
                        <div className="row">
                            <div className="col-4">
                                <img src={Flooring_1_Picture_2} className="alloy-card-image"/>
                            </div>
                            <div className="col-4">
                                <img src={Flooring_1_Picture_3} className="alloy-card-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container lead">
                <div className="row alloy-card-row">
                    <div className="col-md-4">
                        <ProjectCard
                            imageURL={Flooring_2_Picture_1}
                            altText="Flooring"
                            title="Flooring"
                            link="/projects/flooring"
                        />
                    </div>
                    <div className="col-md-8">
                        <h2>04/19/2019</h2>
                        <div className="row">
                            <div className="col-4">
                                <img src={Flooring_2_Picture_2} className="alloy-card-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BathroomProject;