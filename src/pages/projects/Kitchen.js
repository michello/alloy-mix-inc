import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import {projectDetails} from './projectDetails';

const KitchenProject = () => {
    const info = {
        title: "Kitchen",
        link: "/projects/kitchen"
    }

    return(
        <ProjectPage
            projects={projectDetails.kitchen}
            info={info}
        />
    )
}

export default KitchenProject;