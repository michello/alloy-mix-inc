import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import {projectDetails} from './projectDetails';

const ShelvesClosetsProject = () => {
    const info = {
        title: "Shelves and Closets",
        link: "/projects/shelves-and-closets"
    }

    return(
        <ProjectPage
            projects={projectDetails.shelvesClosets}
            info={info}
        />
    )
}

export default ShelvesClosetsProject;