import React from 'react'

import { HashRouter, Route, Link, Redirect } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem, timeoutsShape } from "shards-react";
import { isValidProject, getProjectDetails } from '../api';
import Hero from '../components/Hero'
import ProjectInfo from '../components/ProjectInfo'

const Project = (props) => {
  const projectName = props.match.params.projectName
  return(
    <>
      {!isValidProject(projectName) && 
        <Redirect to="/404" />
      }

      <Hero page="project" title={projectName}/>
      <div className="container lead">
        <ProjectInfo {...getProjectDetails(projectName)}/>
      </div>
      
      
    </>
  )
}

export default Project;

