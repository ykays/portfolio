import React from "react";
import { projectsSummary } from "./projectsObject";
import ProjectSummary from "./ProjectSummary";

function ProjectsList() {
  return (
    <div>
      <h2>Projects</h2>

      <p>
        {projectsSummary.map((project) => {
          return <ProjectSummary project={project} />;
        })}
      </p>
    </div>
  );
}

export default ProjectsList;
