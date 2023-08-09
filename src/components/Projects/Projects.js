import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mindmap from "../../Assets/Projects/mindmap.png";
import airbnb from "../../Assets/Projects/airbnb.png";
import main from "../../Assets/Projects/main.png";
import aicademy from "../../Assets/Projects/aicademy.png";
import analysis from "../../Assets/Projects/analysis.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aicademy}
              isBlog={false}
              title="AIcademy"
              description="Independently developed AIcademy using React for an intuitive UI that boosted course enrollment. Innovated AI-driven assessment with ChatGPT API, integrated Django and PostgreSQL for instant feedback. Employed React for dynamic progress tracking, visualizing learning through interactive bars. Introduced personalized course collections with React and Django, promoting collaborative learning."
              ghLink="https://github.com/jialingye/p4_frontend"
              demoLink="https://aicademy-5d534.web.app/"
            />
        </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="CasaAmor Airbnb"
              description="Built a MERN stack Airbnb-inspired platform catering to couples. Incorporated Google Maps API for streamlined address handling and location display. Developed an advanced booking system, avoiding conflicts in both frontend and backend, facilitating rescheduling and cancellation. Crafted comprehensive profiles, encompassing booking history, reviews, property management, and income tracking with D3.js."
              ghLink="https://github.com/jialingye/project3-FrontEnd"
              demoLink="https://casa-amor-airbnb.onrender.com/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analysis}
              isBlog={false}
              title="Time Planner"
              description="
              I orchestrated the creation of a dynamic web task manager using Node.js, Express, MongoDB, and EJS. This system, enhanced by APIs like Bucketlist, Promodoro, and Chart.js, offers diverse planning views and personalized event searches. Chart.js further analyzes task completion trends, while the integrated ChatGPT API aids strategic planning through interactive prompts and chat functionality."
              ghLink="https://github.com/jialingye/timeplanner"
              demoLink="https://time-planner.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={main}
              isBlog={false}
              title="Hogwarts Treasures Hunt"
              description="Crafted an engaging web game drawing inspiration from the Harry Potter series' treasure hunt. Leveraged HTML, CSS, and JavaScript to introduce clickable items, timers, animations, and an immersive user experience. Game logic and score tracking were implemented using vanilla JavaScript, showcasing seamless play and a dynamic leaderboard, highlighting my front-end development skills and creative solutions."
              ghLink="https://github.com/jialingye/projectOne"
              demoLink="https://jialingye.github.io/projectOne/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindmap}
              isBlog={false}
              title="Mindmap Todo List"
              description="
              I have developed a mindmap-based todo list application using Django/Python for the backend and Django views for the frontend. The app enables users to create projects with hierarchical nodes. Each node can have a parent node and tasks can be added under each node. The app draws relationship diagrams based on node relations, aiding users in visualizing project hierarchies and associated tasks."
              ghLink="https://github.com/jialingye/miniproject"
              demoLink="https://miniproject-8f5e.onrender.com/project/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
