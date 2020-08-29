import React from 'react'
import '../index.css';

const ProjectInfo = ({project, type, description, start_date, end_date}) => (
  <div>
    <h1>{project}</h1>
    
    This is a project page. 
    {type}
    {description}
    {start_date}
    {end_date}
  </div>
)

export default ProjectInfo;