import React from "react";
import "./Name.css";
import Container from "react-bootstrap/Container";

function Name() {
  return (
    <Container className="Main">
      <h1 className="Name">Katarzyna Kays</h1>
      <h4 className="Title">Software Engineer</h4>
      <div>
        <p className="Summary">
          I am a Software Engineer with ten years of experience as IT
          Business/Data Analyst. I am passionate about collaborating with
          individuals and teams to solve complex business problems through
          innovation and creativity.
        </p>
      </div>
      <hr />
      <div>
        <p className="Contact">Contact details:</p>
        <p>
          <b>Email</b>: kays.katarzyna@gmail.com
        </p>
        <p>
          <b>Phone</b>: +1 757 355 2742
        </p>
      </div>
      <a href="https://github.com/ykays" target="_blank" rel="noreferrer">
        <i className="fa fa-github" style={{ fontSize: "36px" }}></i>
      </a>
      <a
        href="https://www.linkedin.com/in/katarzyna-kays/"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className="fa fa-linkedin"
          style={{ fontSize: "36px", marginLeft: "10px" }}
        ></i>
      </a>
    </Container>
  );
}

export default Name;
