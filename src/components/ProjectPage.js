import React from 'react'
import '../styles/Project.css';
import ProjectImage from "../img/project.jpg"
import Hero from "../components/Hero";
import ProjectCard from '../components/ProjectCard';
import Navigation from '../components/Navigation';

const ProjectPage = ({projects, info}) => {
    function ProjectSection({projects}) {
        return(
            <>
                {projects.map((project, pictures, index) => (
                    <div className="row alloy-card-row" key={index}>
                        <div className="col-md-4">
                            <ProjectCard
                                imageURL={project.info.image}
                                altText={project.info.altText}
                                title={project.info.title}
                                link={project.info.link}
                            />
                        </div>
                        <div className="col-md-8">
                            <h2>{project.info.title}</h2>
                            <h2>{project.info.date}</h2>
                            <div className="row">
                                {project.pictures.map((pictureUrl, index) => (
                                    <img
                                        src={pictureUrl}
                                        className="alloy-card-image col-4"
                                        key={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
  return(
    <>
        <Hero
            page="project"
            title={info.title}
            backgroundImageUrl={ProjectImage}
            headerStyle={{backgroundColor: '#fff'}}
        />
        <div className="container lead">
            <Navigation
                paths={[
                    {url: "/projects", pageName: "Projects", isActive: false },
                    {url: info.link, pageName: info.title, isActive: true }
            ]}/>
            <ProjectSection projects={projects}/>
        </div>
    </>
  )
}

export default ProjectPage
