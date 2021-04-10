import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import {projectDetails} from './projectDetails';

const GateProject = () => {
    const info = {
        title: "Gate Installation and Design",
        link: "/projects/gate"
    }

    return(
        <ProjectPage
            projects={projectDetails.gate}
            info={info}
        />
    )
}

export default GateProject;