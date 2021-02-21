import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);

  const projectElement = projects.map((proObj) => {
      console.log(proObj)
    return (
      <ProjectItem 
    key = {proObj.id}
    name = {proObj.name}
    about = {proObj.about}
    technologies = {proObj.technologies}
    />
    )

  })

  // console.log(projectElement)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectElement}
      </div>
    </div>
  );


    
    


}

export default ProjectList;
