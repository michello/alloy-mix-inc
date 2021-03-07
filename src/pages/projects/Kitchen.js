import React from 'react';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';

import '../../styles/Project.css';

/* pictures of projects*/
/* project 1 */
import Kitchen_1_Picture_1 from '../../img/projects/kitchen/Kitchen 1/IMG_20181205_174630.jpg';
import Kitchen_1_Picture_2 from '../../img/projects/kitchen/Kitchen 1/IMG_20181205_174636.jpg';
import Kitchen_1_Picture_3 from '../../img/projects/kitchen/Kitchen 1/IMG_20181201_200612.jpg';
import Kitchen_1_Picture_4 from '../../img/projects/kitchen/Kitchen 1/IMG_20181113_164256.jpg';
import Kitchen_1_Picture_5 from '../../img/projects/kitchen/Kitchen 1/IMG_20181109_131312.jpg';

/* project 2 */
import Kitchen_2_Picture_1 from '../../img/projects/kitchen/Fume Hood/IMG_20190819_163717.jpg';
import Kitchen_2_Picture_2 from '../../img/projects/kitchen/Fume Hood/IMG_20190802_121451.jpg';

const KitchenProject = () => {
    return(
        <>
            <Hero
                page="project"
                title="Kitchen"
                headerStyle={{backgroundColor: '#fff'}}
            />
            <div className="container lead">
                <div className="row alloy-card-row">
                    <div className="col-md-4">
                        <ProjectCard
                            imageURL={Kitchen_1_Picture_1}
                            altText="Kitchen"
                            title="Kitchen"
                            link="/projects/kitchen"
                        />
                    </div>
                    <div className="col-md-8">
                        <h2>11/09/2018 to 12/05/2018</h2>
                        <div className="row mb-4">
                            <div className="col-4">
                                <img src={Kitchen_1_Picture_2} className="alloy-card-image"/>
                            </div>
                            <div className="col-4">
                                <img src={Kitchen_1_Picture_3} className="alloy-card-image"/>
                            </div>
                            <div className="col-4">
                                <img src={Kitchen_1_Picture_4} className="alloy-card-image"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src={Kitchen_1_Picture_5} className="alloy-card-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container lead">
                <div className="row alloy-card-row">
                    <div className="col-md-4">
                        <ProjectCard
                            imageURL={Kitchen_2_Picture_1}
                            altText="Kitchen - Fume Hood"
                            title="Kitchen - Fume Hood"
                            link="/projects/kitchen"
                        />
                    </div>
                    <div className="col-md-8">
                        <h2>08/02/2019</h2>
                        <div className="row">
                            <div className="col-4">
                                <img src={Kitchen_2_Picture_2} className="alloy-card-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KitchenProject;