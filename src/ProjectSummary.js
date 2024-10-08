import React, { useState } from "react";
import "./ProjectSummary.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ModalVideo from "react-modal-video";

function ProjectSummary({ project }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="ProjectSummary">
      <Container>
        <Row>
          <Col>
            <div className="ProjectName">
              {project.name}

              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <i className="fa fa-github" style={{ fontSize: "26px" }}></i>
              </a>
              <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId={project.video}
                onClose={() => setOpen(false)}
              />
              <Button
                variant="outline-primary"
                style={{ marginLeft: "15px" }}
                onClick={() => setOpen(true)}
              >
                Demo
              </Button>
            </div>
            <div
              style={{
                fontStyle: "italic",
                fontSize: "0.75rem",
                marginBottom: "10px",
              }}
            >
              {project.type}
            </div>
            <div style={{ marginBottom: "10px" }} className="ProjectSum">
              {project.summary}
            </div>
            <div style={{ marginBottom: "10px", fontSize: "0.80rem" }}>
              {project.details}
            </div>
            <div>
              {project.stack.map((s) => (
                <Button
                  variant="outline-warning"
                  size="sm"
                  disabled
                  style={{ marginRight: "2px" }}
                  className="ProjectStack"
                >
                  {s}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectSummary;
