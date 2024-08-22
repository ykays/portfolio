import React from "react";
import "./Summary.css";
import ProjectsList from "./ProjectsList";
import Container from "react-bootstrap/Container";

function Summary() {
  return (
    <Container className="Summary-About">
      <p>
        Over the past 10 years I worked as a{" "}
        <b>Senior Systems/Business and Data Analyst </b>at an Investment Bank
        where I gathered requirements, analyzed processes, oversaw the
        development and implementation of multiple data related projects, and
        then tested the newly created solutions.
      </p>
      <p>
        As the next step in that career, I’ve recently completed an intensive
        <b> Software Engineer course at Springboard</b>, where I mastered skills
        in front-end and back-end web development, databases, and data
        structures and algorithms. I created many projects using{" "}
        <b>
          JavaScript, Python, Flask, Node.js, Express.js, React, SQL,
          SQLAlchemy, jQuery, HTML, CSS
        </b>
        , to name a few.
      </p>
      <p>
        I am looking for a Software Engineer opportunity in a company where I
        can continue my <b>collaborative, product-oriented work </b>in a more
        technical setting. As an engineer, analyst, and product person,{" "}
        <b>
          I enjoy problem solving, creating useful solutions, and putting in the
          work that has a direct impact on people’s lives.{" "}
        </b>
        I’ve worked on multiple projects in different areas of industry where
        I’ve learned by doing and through collaboration with my project team. I
        am detail oriented and not afraid of putting in a lot of work to learn
        new skills, solve a problem, debug the code, test and implement the
        solution.
      </p>
      <hr />
      <ProjectsList />
    </Container>
  );
}

export default Summary;
