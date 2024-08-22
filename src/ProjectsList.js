import React from "react";
import { projectsSummary } from "./projectsObject";
import ProjectSummary from "./ProjectSummary";
import Container from "react-bootstrap/Container";

function ProjectsList() {
  return (
    <Container>
      <h2>Projects</h2>

      <p>
        {projectsSummary.map((project) => {
          return <ProjectSummary project={project} />;
        })}
      </p>
    </Container>
  );
}

export default ProjectsList;
