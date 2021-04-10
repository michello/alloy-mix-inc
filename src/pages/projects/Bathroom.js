import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import {projectDetails} from './projectDetails';

const BathroomProject = () => {
    const info = {
        title: "Bathroom",
        link: "/projects/bathroom"
    }

    return(
        <ProjectPage
            projects={projectDetails.bathroom}
            info={info}
        />
    )
}

export default BathroomProject;