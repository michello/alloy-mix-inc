import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import {projectDetails} from './projectDetails';

const FlooringProject = () => {
    const info = {
        title: "Flooring",
        link: "/projects/flooring"
    }

    return(
        <ProjectPage
            projects={projectDetails.flooring}
            info={info}
        />
    )
}

export default FlooringProject;