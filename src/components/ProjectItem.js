import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techList = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techList}
      </div>
    </div>
  );
}



// The ProjectItem component should get a prop of technologies passed down from ProjectList. For each element in this array of technologies, create a <span> tag that displays the name of the technology.



export default ProjectItem;
