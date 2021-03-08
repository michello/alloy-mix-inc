import React from 'react';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';

import '../../styles/Project.css';

/* pictures of projects*/
/* project 1 */
import Kitchen_1_Picture_1 from '../../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_1.jpeg';
import Kitchen_1_Picture_2 from '../../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_2.jpeg';
import Kitchen_1_Picture_3 from '../../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_3.jpeg';
import Kitchen_1_Picture_4 from '../../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_4.jpeg';
import Kitchen_1_Picture_5 from '../../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_5.jpeg';

/* project 2 */
import Kitchen_2_Picture_1 from '../../img/projects/kitchen/Fume Hood/Fume_Hood_2_Image_1.jpeg';
import Kitchen_2_Picture_2 from '../../img/projects/kitchen/Fume Hood/Fume_Hood_2_Image_1.jpeg';

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